import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setLanguage(language === 'en' ? 'om' : 'en')}
        className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 gap-2"
      >
        <Globe className="h-4 w-4" />
        {language === 'en' ? 'OM' : 'EN'}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
