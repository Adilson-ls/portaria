import React, { useState } from 'react';
import { 
  Menu, Bell, ChevronDown, MessageCircle, FileText, Calendar, 
  Wrench, Plus, Users, UserCheck, Clock, RefreshCw, 
  MessageSquare, CalendarDays, Mail, Key, Search, ChevronRight,
  Eye, X, EyeOff
} from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState('home');

  const navigateTo = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen bg-[#f3f5f8] font-sans text-slate-800">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 sticky top-0 z-10">
        <div className="flex items-center space-x-6 h-full">
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <Menu className="w-6 h-6 mr-2" />
            <span className="text-sm font-medium">Menu</span>
          </button>
          
          <div 
            className="h-full border-l border-r border-gray-200 px-6 flex items-center justify-center cursor-pointer"
            onClick={() => navigateTo('home')}
          >
            {/* Logo Placeholder */}
            <div className="flex flex-col items-center justify-center text-[#d4af37]">
              <div className="border border-[#d4af37] p-1 mb-1 rounded-sm">
                <div className="w-4 h-2 border-b border-[#d4af37] rounded-t-full"></div>
              </div>
              <span className="text-[10px] tracking-[0.2em] font-serif uppercase">Aurora</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 cursor-pointer border border-gray-200 rounded-full px-3 py-1 hover:bg-gray-50">
            <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
               <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=150&h=150" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <span className="text-sm font-medium text-gray-700">Portaria</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          <div className="w-8 h-16 bg-[#8b2b4e] flex items-center justify-center text-white cursor-pointer relative top-0 right-[-16px]">
             <Bell className="w-4 h-4" />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="p-6 max-w-7xl mx-auto">
        {currentView === 'home' ? (
          <HomeView onNavigate={navigateTo} />
        ) : (
          <PortariaView onNavigate={navigateTo} />
        )}
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#8b2b4e] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#7a2544] transition-colors z-50">
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

// --- VIEWS ---

const HomeView = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-300">
      <h1 className="text-2xl font-light text-gray-700 mb-8 mt-4 uppercase">AURORA</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Cadastros */}
        <div className="bg-white rounded shadow-sm overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow h-48 group">
          <div className="h-32 bg-[#4db6ac] relative overflow-hidden">
             {/* Mock image background for 'Cadastros' */}
             <div className="absolute inset-0 opacity-80" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=500&q=80")', backgroundSize: 'cover' }}></div>
          </div>
          <div className="bg-gray-600 text-white p-3 flex items-center text-sm font-medium group-hover:bg-gray-700 transition-colors">
            <FileText className="w-4 h-4 mr-2" /> Cadastros
          </div>
        </div>
        
        {/* Mensagens */}
        <div className="bg-[#7a9df5] rounded shadow-sm overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow h-48 group">
          <div className="flex-1 flex items-center justify-center text-white">
            <MessageCircle className="w-20 h-20 opacity-90 group-hover:scale-110 transition-transform" />
          </div>
          <div className="bg-[#7a9df5] text-white p-3 flex items-center text-sm font-medium border-t border-white/20">
            <MessageCircle className="w-4 h-4 mr-2" /> Mensagens
          </div>
        </div>

        {/* Documentos */}
        <div className="bg-[#3f567e] rounded shadow-sm overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow h-48 group">
          <div className="flex-1 flex items-center justify-center text-white">
            <FileText className="w-20 h-20 opacity-90 group-hover:scale-110 transition-transform" />
          </div>
          <div className="bg-[#3f567e] text-white p-3 flex items-center text-sm font-medium border-t border-white/20">
            <FileText className="w-4 h-4 mr-2" /> Documentos
          </div>
        </div>

        {/* Reservas */}
        <div className="bg-[#901c94] rounded shadow-sm overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow h-48 group">
          <div className="flex-1 flex items-center justify-center text-white">
            <Calendar className="w-20 h-20 opacity-90 group-hover:scale-110 transition-transform" />
          </div>
          <div className="bg-[#901c94] text-white p-3 flex items-center text-sm font-medium border-t border-white/20">
            <Calendar className="w-4 h-4 mr-2" /> Reservas
          </div>
        </div>

        {/* Portaria (Active link to next view) */}
        <div 
          className="bg-white rounded shadow-sm overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow h-48 group"
          onClick={() => onNavigate('portaria')}
        >
          <div className="h-32 relative overflow-hidden">
             <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=500&q=80" alt="Portaria" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="bg-gray-600 text-white p-3 flex items-center text-sm font-medium group-hover:bg-gray-700 transition-colors">
            <Bell className="w-4 h-4 mr-2" /> Portaria
          </div>
        </div>

        {/* Serviços */}
        <div className="bg-[#3f9deb] rounded shadow-sm overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow h-48 group">
          <div className="flex-1 flex items-center justify-center text-white">
            <Wrench className="w-20 h-20 opacity-90 group-hover:scale-110 transition-transform" />
          </div>
          <div className="bg-[#3f9deb] text-white p-3 flex items-center text-sm font-medium border-t border-white/20">
            <Wrench className="w-4 h-4 mr-2" /> Serviços
          </div>
        </div>

      </div>
    </div>
  );
};

const PortariaView = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-300 pb-20">
      
      {/* Breadcrumb */}
      <div className="flex items-center text-xs text-gray-500 mb-6 font-medium">
        <FileText className="w-3 h-3 mr-1" />
        <span className="cursor-pointer hover:underline" onClick={() => onNavigate('home')}>AURORA</span>
        <ChevronRight className="w-3 h-3 mx-1" />
        <span className="text-gray-800 font-semibold">Controle da portaria</span>
      </div>

      {/* Top Actions Tabs */}
      <div className="flex space-x-2 mb-8">
        <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
          <Users className="w-4 h-4" />
          <span>Condôminos</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
        <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
          <UserCheck className="w-4 h-4" />
          <span>Autorizações</span>
        </button>
      </div>

      {/* Registre uma visita Section */}
      <div className="bg-white rounded shadow-sm p-4 mb-6 border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg text-gray-700 font-medium flex items-center">
            <Plus className="w-5 h-5 mr-2 text-gray-500" /> Registre uma visita
          </h2>
          <button className="bg-[#8b2b4e] text-white text-xs px-3 py-1.5 rounded flex items-center space-x-1 hover:bg-[#7a2544]">
            <span>Relatórios</span>
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 font-mono">
            &gt;_
          </div>
          <input 
            type="text" 
            className="w-full border border-gray-300 rounded pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#8b2b4e] focus:border-[#8b2b4e]"
            placeholder="Informe o nome do visitante ou prestador de serviço, CPF, RG ou a placa do veículo"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Visitantes ativos Section */}
      <div className="bg-white rounded shadow-sm p-4 mb-8 border border-gray-200">
        <h2 className="text-lg text-[#d99b38] font-medium flex items-center mb-6">
          <Clock className="w-5 h-5 mr-2" /> Visitantes ativos
        </h2>
        <div className="flex justify-center mb-4">
          <span className="bg-gray-400 text-white text-xs font-semibold px-3 py-1 rounded">
            Não há visitantes ativos.
          </span>
        </div>
      </div>

      {/* 4-Grid Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Panel 1: Mensagens */}
        <div className="bg-white border border-gray-200 rounded shadow-sm flex flex-col">
          <div className="p-4 border-b border-gray-100 flex flex-col items-center">
            <h3 className="text-lg text-gray-600 font-medium flex items-center mb-3">
              <MessageSquare className="w-5 h-5 mr-2" /> Mensagens
            </h3>
            <button className="bg-[#8b2b4e] text-white text-xs px-3 py-1.5 rounded flex items-center space-x-1 hover:bg-[#7a2544]
