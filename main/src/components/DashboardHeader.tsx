import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  User,
  Bell,
  MessageCircle,
  Search,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DashboardHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-card relative z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/discover">
          <img src="/logo.png" alt="CircleMate Logo" className="h-12 w-12" />
          </Link>
          {/* Mobile Logo */}

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/discover">
              <Button variant="ghost" className="text-muted-foreground text-lg">
                Discover
              </Button>
            </Link>
            <Link to="/community">
              <Button variant="ghost" className="text-muted-foreground text-lg">
                Communities
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="ghost" className="text-muted-foreground text-lg">
                Events
              </Button>
            </Link>
            <Link to="/match-making">
              <Button variant="ghost" className="text-muted-foreground text-lg">
                AI-Powered Match Making
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-3">
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </Button>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="icon">
              <Search className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircle className="h-6 w-6" />
            </Button>
            <Link to="/notification">
            <Button variant="ghost" size="icon">
              <Bell className="h-6 w-6" />
            </Button>
            </Link>
            <Link to="/profile">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/icon.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
{isMenuOpen && (
  <div className="fixed top-0 left-0 w-full h-screen bg-white z-40 md:hidden">
    <div className="px-4 py-4 space-y-2">
      <div className="flex justify-between items-center mb-4">
        <img src="/logo.png" alt="CircleMate Logo" className="h-10 w-10" />
        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
          <X className="h-8 w-8" />
        </Button>
      </div>

      <Link to="/discover" onClick={() => setIsMenuOpen(false)}>
        <Button variant="ghost" className="w-full justify-start text-lg">
          Discover
        </Button>
      </Link>
      <Link to="/community" onClick={() => setIsMenuOpen(false)}>
        <Button variant="ghost" className="w-full justify-start text-lg">
          My Communities
        </Button>
      </Link>
      <Link to="/events" onClick={() => setIsMenuOpen(false)}>
        <Button variant="ghost" className="w-full justify-start text-lg">
          Events
        </Button>
      </Link>
      <Link to="/match-making">
        <Button variant="ghost" className="text-muted-foreground text-lg">
          AI-Powered Match Making
        </Button>
      </Link>

      <div className="flex justify-around pt-4 border-t mt-4">
        <Button variant="ghost" size="icon">
          <Search className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon">
          <MessageCircle className="h-6 w-6" />
        </Button>
        <Link to="/notification">
        <Button variant="ghost" size="icon">
          <Bell className="h-6 w-6" />
        </Button>
        </Link>
        {/* Logout button */}
        <Link to="/login">
          <Button variant="ghost" size="icon">
            <LogOut className="h-6 w-6" />
          </Button>
        </Link>
        <Link to="/profile">
          <Avatar className="h-8 w-8">
              <AvatarImage src="/icon.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
        </Link>
      </div>
    </div>
  </div>
)}

    </header>
  );
};

export default DashboardHeader;
