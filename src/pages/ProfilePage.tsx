
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, User, Save, Trash2 } from 'lucide-react';
import { 
  getPerformanceData, 
  updateStudentName,
  clearPerformanceData,
  getOrCreateProfile
} from '@/lib/performanceUtils';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from 'sonner';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [quizCount, setQuizCount] = useState(0);

  useEffect(() => {
    const data = getPerformanceData();
    setName(data.profile.student_name || '');
    setQuizCount(data.attempts.length);
  }, []);

  const handleSave = () => {
    if (name.trim()) {
      updateStudentName(name.trim());
      toast.success('Profile updated successfully!');
    } else {
      toast.error('Please enter a valid name');
    }
  };

  const handleClearData = () => {
    clearPerformanceData();
    setName('');
    setQuizCount(0);
    toast.success('All performance data has been cleared');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-800 to-indigo-700 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-white">Student Profile</h1>
            <p className="text-purple-200">Manage your learning profile</p>
          </div>
        </div>

        {/* Profile Card */}
        <Card className="bg-white/10 border-white/20 mb-6">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-purple-500/20 rounded-full">
                <User className="h-8 w-8 text-purple-400" />
              </div>
              <div>
                <CardTitle className="text-white text-xl">Profile Settings</CardTitle>
                <CardDescription className="text-gray-300">
                  Your name will appear on your performance dashboard
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">Student Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>
            
            <Button onClick={handleSave} className="w-full bg-purple-600 hover:bg-purple-700">
              <Save className="mr-2 h-4 w-4" />
              Save Profile
            </Button>
          </CardContent>
        </Card>

        {/* Stats Card */}
        <Card className="bg-white/10 border-white/20 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-lg">Performance Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
              <span className="text-gray-300">Total Quizzes Completed</span>
              <span className="text-2xl font-bold text-white">{quizCount}</span>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="bg-red-500/10 border-red-500/30">
          <CardHeader>
            <CardTitle className="text-red-400 text-lg">Danger Zone</CardTitle>
            <CardDescription className="text-gray-400">
              This action cannot be undone
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="w-full">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear All Performance Data
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-gray-900 border-gray-700">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-white">Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription className="text-gray-400">
                    This will permanently delete all your quiz history, performance data, and career recommendations.
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-gray-800 text-white border-gray-700 hover:bg-gray-700">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={handleClearData}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Yes, delete everything
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
