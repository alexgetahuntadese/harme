
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus, Star, AlertTriangle } from 'lucide-react';
import { SkillAnalysis as SkillAnalysisType } from '@/lib/performanceUtils';
import { getSkillLevel } from '@/lib/careerData';

interface SkillAnalysisProps {
  analysis: SkillAnalysisType;
}

const SkillAnalysis = ({ analysis }: SkillAnalysisProps) => {
  const { difficulty_performance, improvement_trend, strengths, weaknesses } = analysis;

  const getTrendIcon = () => {
    if (improvement_trend > 5) {
      return <TrendingUp className="h-5 w-5 text-green-500" />;
    } else if (improvement_trend < -5) {
      return <TrendingDown className="h-5 w-5 text-red-500" />;
    }
    return <Minus className="h-5 w-5 text-gray-400" />;
  };

  const getTrendMessage = () => {
    if (improvement_trend > 10) return "Excellent progress!";
    if (improvement_trend > 5) return "Good improvement";
    if (improvement_trend > 0) return "Slight improvement";
    if (improvement_trend === 0) return "Stable performance";
    if (improvement_trend > -5) return "Slight decline";
    return "Needs attention";
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Difficulty Performance */}
      <Card className="bg-white/5 border-white/20">
        <CardHeader>
          <CardTitle className="text-white text-lg">Difficulty Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-green-400">Easy</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 rounded-full transition-all"
                    style={{ width: `${difficulty_performance.easy}%` }}
                  />
                </div>
                <span className="text-white w-12 text-right">{difficulty_performance.easy}%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-yellow-400">Medium</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-yellow-500 rounded-full transition-all"
                    style={{ width: `${difficulty_performance.medium}%` }}
                  />
                </div>
                <span className="text-white w-12 text-right">{difficulty_performance.medium}%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-red-400">Hard</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-red-500 rounded-full transition-all"
                    style={{ width: `${difficulty_performance.hard}%` }}
                  />
                </div>
                <span className="text-white w-12 text-right">{difficulty_performance.hard}%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Improvement Trend */}
      <Card className="bg-white/5 border-white/20">
        <CardHeader>
          <CardTitle className="text-white text-lg">Progress Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/10 rounded-lg">
              {getTrendIcon()}
            </div>
            <div>
              <div className="text-2xl font-bold text-white">
                {improvement_trend > 0 ? '+' : ''}{improvement_trend}%
              </div>
              <div className="text-sm text-gray-400">{getTrendMessage()}</div>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Based on comparison of your last 5 quizzes vs previous 5 quizzes
          </p>
        </CardContent>
      </Card>

      {/* Strengths */}
      <Card className="bg-white/5 border-white/20">
        <CardHeader>
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Strengths
          </CardTitle>
        </CardHeader>
        <CardContent>
          {strengths.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {strengths.map(subject => (
                <Badge 
                  key={subject} 
                  className="bg-green-500/20 text-green-400 border-green-500/30"
                >
                  {subject}
                </Badge>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-sm">
              Complete more quizzes with 70%+ scores to identify your strengths
            </p>
          )}
        </CardContent>
      </Card>

      {/* Weaknesses */}
      <Card className="bg-white/5 border-white/20">
        <CardHeader>
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
            Areas for Improvement
          </CardTitle>
        </CardHeader>
        <CardContent>
          {weaknesses.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {weaknesses.map(subject => (
                <Badge 
                  key={subject} 
                  className="bg-orange-500/20 text-orange-400 border-orange-500/30"
                >
                  {subject}
                </Badge>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-sm">
              Great job! No subjects need immediate attention
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillAnalysis;
