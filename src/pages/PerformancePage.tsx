
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, User, Trophy, BookOpen, Target } from 'lucide-react';
import { 
  getPerformanceData, 
  getOverallAverageScore, 
  getTotalQuizCount,
  getRecentAttempts,
  PerformanceData 
} from '@/lib/performanceUtils';
import PerformanceChart from '@/components/performance/PerformanceChart';
import SkillAnalysis from '@/components/performance/SkillAnalysis';
import CareerSuggestions from '@/components/performance/CareerSuggestions';
import PerformanceHistory from '@/components/performance/PerformanceHistory';
import ProgressOverTime from '@/components/performance/ProgressOverTime';

const PerformancePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<PerformanceData | null>(null);
  const [averageScore, setAverageScore] = useState(0);
  const [totalQuizzes, setTotalQuizzes] = useState(0);

  useEffect(() => {
    const performanceData = getPerformanceData();
    setData(performanceData);
    setAverageScore(getOverallAverageScore());
    setTotalQuizzes(getTotalQuizCount());
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-700 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  const getScoreGrade = (score: number) => {
    if (score >= 90) return { grade: 'A+', color: 'text-green-400' };
    if (score >= 80) return { grade: 'A', color: 'text-green-400' };
    if (score >= 70) return { grade: 'B', color: 'text-blue-400' };
    if (score >= 60) return { grade: 'C', color: 'text-yellow-400' };
    if (score >= 50) return { grade: 'D', color: 'text-orange-400' };
    return { grade: 'F', color: 'text-red-400' };
  };

  const scoreGrade = getScoreGrade(averageScore);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-700 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-white">Performance Dashboard</h1>
              <p className="text-purple-200">
                {data.profile.student_name || 'Student'}'s learning journey
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => navigate('/profile')}
            className="border-white/20 text-white hover:bg-white/10"
          >
            <User className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-4 text-center">
              <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className={`text-3xl font-bold ${scoreGrade.color}`}>
                {averageScore > 0 ? scoreGrade.grade : '-'}
              </div>
              <p className="text-sm text-gray-300">Overall Grade</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">{averageScore}%</div>
              <p className="text-sm text-gray-300">Average Score</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-4 text-center">
              <BookOpen className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white">{totalQuizzes}</div>
              <p className="text-sm text-gray-300">Quizzes Taken</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-4 text-center">
              <div className="h-8 w-8 text-2xl mx-auto mb-2">📚</div>
              <div className="text-3xl font-bold text-white">
                {Object.keys(data.analysis.subject_scores).length}
              </div>
              <p className="text-sm text-gray-300">Subjects Studied</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="space-y-8">
          {/* Subject Performance Chart */}
          <PerformanceChart subjectScores={data.analysis.subject_scores} />
          
          {/* Progress Over Time */}
          <ProgressOverTime attempts={data.attempts} />
          
          {/* Skill Analysis */}
          <SkillAnalysis analysis={data.analysis} />
          
          {/* Career Suggestions */}
          <CareerSuggestions subjectScores={data.analysis.subject_scores} />
          
          {/* Quiz History */}
          <PerformanceHistory attempts={data.attempts} />
        </div>

        {/* Call to Action */}
        {totalQuizzes === 0 && (
          <Card className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 border-0">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Start Your Learning Journey!</h3>
              <p className="text-purple-100 mb-4">
                Take quizzes to track your progress and get personalized career recommendations
              </p>
              <Button 
                onClick={() => navigate('/grades')}
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                Browse Quizzes
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PerformancePage;
