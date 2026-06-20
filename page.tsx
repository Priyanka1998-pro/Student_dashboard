import React from 'react';
import { supabase } from '@/lib/supabaseClient';
// 1. import icon
import { 
  LayoutDashboard, BookOpen, BarChart3, 
  Award, Settings, Flame, GraduationCap, 
  CheckCircle2, ChevronRight, Clock, ShieldCheck
} from 'lucide-react';
  // Supabasese live courses ka data la rahe hai
  let displayCourses:any[]=[];
  try {
    const { data: courses } = await supabase.from('courses').select('*');
    if (courses && courses.length > 0) {
      displayCourses = courses;
    } else {
      // ager database na connect ho to dekhega
      displayCourses = [
        { id: 1, title: 'HTML5 Structure & Elements', progress: 80, icon_name: 'BookOpen' },
        { id: 2, title: 'CSS3 Flexbox & Grid Masterclass', progress: 55, icon_name: 'LayoutDashboard' },
        { id: 3, title: 'Modern JavaScript Basics', progress: 30, icon_name: 'Flame' }
      ];
    }
  } catch (e) {
    // error aane per ye dikhega
    displayCourses = [
      { id: 1, title: 'HTML5 Structure & Elements', progress: 80, icon_name: 'BookOpen' },
      { id: 2, title: 'CSS3 Flexbox & Grid Masterclass', progress: 55, icon_name: 'LayoutDashboard' },
      { id: 3, title: 'Modern JavaScript Basics', progress: 30, icon_name: 'Flame' }
    ];
  }
export default async function StudentDashboard() {
    const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen size={24} />;
      case 'LayoutDashboard': return <LayoutDashboard size={24} />;
      case 'Flame': return <Flame size={24} />;
      default: return <BookOpen size={24} />;
    }
  };
  //graph height
  const chartHeights =[40, 55, 75, 50, 65, 55, 95];

  return (
    <div className="flex min-h-screen bg-[#080c14] text-gray-400 font-sans">
      
      {/* left side*/}
      <aside className="w-64 border-r border-gray-900 bg-[#0b111e] p-6 flex flex-col justify-between hidden md:flex">
        <div>
          {/* logo */}
          <div className="flex items-center gap-2.5 mb-8 px-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
              LH
            </div>
            <div>
              <span className="text-white font-bold text-base tracking-wide block leading-none">LearnHub</span>
              <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase mt-1 block">Dashboard</span>
            </div>
          </div>
          
          {/* menu links */}
          <nav>
            <ul className="space-y-1.5">
              <li className="bg-indigo-600/10 text-indigo-400 px-4 py-3 rounded-xl flex items-center gap-3 font-medium cursor-pointer">
                <LayoutDashboard size={18} /> Overview
              </li>
              <li className="hover:bg-gray-800/40 hover:text-white px-4 py-3 rounded-xl flex items-center gap-3 font-medium cursor-pointer transition-all">
                <BookOpen size={18} /> My Courses
              </li>
              <li className="hover:bg-gray-800/40 hover:text-white px-4 py-3 rounded-xl flex items-center gap-3 font-medium cursor-pointer transition-all">
                <BarChart3 size={18} /> Progress
              </li>
              <li className="hover:bg-gray-800/40 hover:text-white px-4 py-3 rounded-xl flex items-center gap-3 font-medium cursor-pointer transition-all">
                <Settings size={18} /> Settings
              </li>
            </ul>
          </nav>
        </div>

        {/* profile */}
        <div className="border-t border-gray-900 pt-4 flex items-center justify-between group cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 p-[2px]">
              <div className="w-full h-full bg-[#0b111e] rounded-full flex items-center justify-center text-white font-bold text-sm">
                PY
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-semibold text-white truncate">Priyanka Yadav</span>
              <span className="text-xs text-gray-500 truncate">priyanka@yadav.com</span>
            </div>
          </div>
          <ChevronRight size={16} className="text-gray-600" />
        </div>
      </aside>
      {/* 💻 welcome area */}
      <main className="flex-1 p-6 lg:p-8 space-y-8 overflow-y-auto">
        
        {/* welcome */}
        <header>
          <h1 className="text-white font-bold text-2xl lg:text-3xl tracking-tight">
            Welcome back, Priyanka!
          </h1>
          <p className="text-gray-500 text-sm mt-1">Let's continue your learning journey today.</p>
        </header>

        {/* top cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* course card */}
          <div className="bg-[#0b111e] border border-gray-900 rounded-2xl p-5 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400"><GraduationCap size={22} /></div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Courses Enrolled</p>
              <h3 className="text-2xl font-bold text-white mt-0.5">2</h3>
            </div>
          </div>

          {/* progress card*/}
          <div className="bg-[#0b111e] border border-gray-900 rounded-2xl p-5 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400"><BarChart3 size={22} /></div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Overall Progress</p>
              <h3 className="text-2xl font-bold text-white mt-0.5">68%</h3>
            </div>
          </div>

          {/* Achivement card*/}
          <div className="bg-[#0b111e] border border-gray-900 rounded-2xl p-5 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-400"><Award size={22} /></div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Achievements</p>
              <h3 className="text-2xl font-bold text-white mt-0.5">4</h3>
            </div>
          </div>

          {/* streak card */}
          <div className="bg-[#0b111e] border border-gray-900 rounded-2xl p-5 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400"><Flame size={22} /></div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Learning Streak</p>
              <h3 className="text-2xl font-bold text-white mt-0.5">6 Days</h3>
            </div>
          </div>

        </section>
        {/* bento layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/*courses and consistency */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-white font-bold text-lg tracking-tight">My Courses</h2>
            </div>
            {/* HTML and CSS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">  
              {/* HTML */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {displayCourses.map((course: any) => (
    <article key={course.id} className="bg-[#0b111e] border border-gray-900 rounded-2xl p-5 flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-black text-lg">
          {renderIcon(course.icon_name)}
        </div>
        <span className="text-xs font-bold text-indigo-400 bg-indigo-500/5 px-2 py-1 rounded-md">{course.progress}% Done</span>
      </div>
      <div>
        <h3 className="text-white font-bold text-base group-hover:text-indigo-400 transition-colors">{course.title}</h3>
        <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-2"><Clock size={12} /> Live Course</p>
      </div>
      <div className="w-full bg-gray-900 rounded-full h-1.5 overflow-hidden mt-4">
        <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
      </div>
    </article>
  ))}
</div>
            </div>

            {/* daily tracker */}
            <article className="bg-[#0b111e] border border-gray-900 rounded-2xl p-6">
              <h3 className="text-white font-bold text-sm mb-4">Daily Consistency Tracker</h3>
              <div className="flex justify-between items-center gap-2 overflow-x-auto pb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
                  <div key={day} className="flex flex-col items-center gap-2 min-w-[45px]">
                    <span className="text-xs text-gray-500 font-medium">{day}</span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${
                      idx < 6 ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-gray-900 border-gray-800 text-gray-600'
                    }`}>
                      {idx < 6 ? <CheckCircle2 size={18} /> : <Clock size={16} />}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-emerald-400 font-medium mt-3 flex items-center gap-1.5">
                <ShieldCheck size={14} /> You have maintained your streak for 6 consecutive days!
              </p>
            </article>
          </div>

          {/* activity graph */}
          <div className="space-y-6">
            <article className="bg-[#0b111e] border border-gray-900 rounded-2xl p-5 flex flex-col justify-between min-h-[220px]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-white font-bold text-sm tracking-tight">Daily Activity Overview</h2>
                <span className="text-[10px] font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md">This Week</span>
              </div>
              
              {/* custom css bar graph  */}
              <div className="flex items-end justify-between h-28 px-2 pt-2 border-b border-gray-900 gap-2">
                {chartHeights.map((height, i) => (
                  <div 
                    key={i} 
                    className="w-full bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t-md hover:from-purple-400 hover:to-pink-500 transition-all cursor-pointer" 
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
              <p className="text-[11px] text-gray-500 mt-3">Study hours are peaking during mid-week sessions.</p>
            </article>

            {/* recent activity */}
            <article className="bg-[#0b111e] border border-gray-900 rounded-2xl p-5 space-y-4">
              <h2 className="text-white font-bold text-sm tracking-tight">Recent Activity</h2>
              <div className="space-y-3.5">
                <div className="flex gap-3 items-start text-xs">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                  <div>
                    <p className="text-gray-300 font-medium">Completed "HTML Form Validation"</p>
                    <span className="text-[10px] text-gray-600">2 hours ago</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start text-xs">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
                  <div>
                    <p className="text-gray-300 font-medium">Started "CSS3 Grid Layout Basics"</p>
                    <span className="text-[10px] text-gray-600">Yesterday</span>
                  </div>
                </div>
              </div>
            </article>
          </div>

        </div>
      </main>
    </div>
  );
}
