
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, BookOpen } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-700">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 opacity-0 animate-fade-in">
            EthioQuiz 2050
          </h1>
          <p className="text-xl text-blue-100 mb-8 opacity-0 animate-fade-in [animation-delay:0.2s]">
            Advanced Learning Platform for Ethiopian Students
          </p>
          <div className="text-lg text-purple-100 opacity-0 animate-fade-in [animation-delay:0.4s]">
            Grades 1-12 • Interactive Quizzes • Progress Tracking
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
          {/* Browse Quizzes Card */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 shadow-2xl hover:shadow-purple-500/20 opacity-0 animate-fade-in [animation-delay:0.6s]">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-purple-400" />
                <div>
                  <CardTitle className="text-white text-xl">Explore Subjects</CardTitle>
                  <CardDescription className="text-blue-100">
                    Browse all available quizzes
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => navigate('/grades')}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Browse Quizzes
              </Button>
            </CardContent>
          </Card>

          {/* My Performance Card */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 shadow-2xl hover:shadow-green-500/20 opacity-0 animate-fade-in [animation-delay:0.7s]">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BarChart3 className="h-8 w-8 text-green-400" />
                <div>
                  <CardTitle className="text-white text-xl">My Performance</CardTitle>
                  <CardDescription className="text-blue-100">
                    Track progress & career paths
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => navigate('/performance')}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                View Dashboard
              </Button>
            </CardContent>
          </Card>

          {/* Host Session Card */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 shadow-2xl hover:shadow-blue-500/20 opacity-0 animate-fade-in [animation-delay:0.8s]">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-blue-400" />
                <div>
                  <CardTitle className="text-white text-xl">Multiplayer</CardTitle>
                  <CardDescription className="text-blue-100">
                    Host or join quiz sessions
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex gap-2">
              <Button 
                onClick={() => navigate('/host')}
                variant="outline"
                className="flex-1 border-blue-400/50 text-blue-300 hover:bg-blue-500/20"
              >
                Host
              </Button>
              <Button 
                onClick={() => navigate('/join')}
                variant="outline"
                className="flex-1 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/20"
              >
                Join
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center opacity-0 animate-fade-in [animation-delay:1s]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white/80">
            <div>
              <div className="text-2xl font-bold text-green-400">2050+</div>
              <div className="text-sm">Questions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">12</div>
              <div className="text-sm">Subjects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">12</div>
              <div className="text-sm">Grade Levels</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-400">AI</div>
              <div className="text-sm">Powered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
