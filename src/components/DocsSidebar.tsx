
import React from 'react';
import { Book, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface DocSection {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  tags: string[];
  icon: React.ElementType;
}

interface DocsSidebarProps {
  sections: DocSection[];
  selectedSection: string;
  onSectionSelect: (sectionId: string) => void;
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const DocsSidebar = ({
  sections,
  selectedSection,
  onSectionSelect,
  categories,
  selectedCategory,
  onCategorySelect
}: DocsSidebarProps) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const groupedSections = sections.reduce((acc, section) => {
    if (!acc[section.category]) {
      acc[section.category] = [];
    }
    acc[section.category].push(section);
    return acc;
  }, {} as Record<string, DocSection[]>);

  return (
    <>
      {/* Mobile toggle button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-800 hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-80 bg-gray-900/95 backdrop-blur-sm border-r border-gray-700 transform transition-transform duration-200 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="flex flex-col h-full mt-16">
          {/* Logo */}
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <Book className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">SDK Docs</h3>
                <p className="text-xs text-gray-400">Developer Guide</p>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="p-4 border-b border-gray-700">
            <h4 className="text-sm font-medium text-gray-300 mb-2">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={cn(
                    "cursor-pointer text-xs",
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "border-gray-600 text-gray-300 hover:bg-gray-700"
                  )}
                  onClick={() => onCategorySelect(category)}
                >
                  {category === 'all' ? 'All' : category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1">
            <div className="p-4 space-y-4">
              {Object.entries(groupedSections).map(([category, categorySections]) => (
                <div key={category} className="space-y-2">
                  {/* <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    {category}
                  </h4> */}
                  <div className="space-y-1">
                    {categorySections.map(section => {
                      const Icon = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => {
                            onSectionSelect(section.id);
                            setIsOpen(false); // Close on mobile
                          }}
                          className={cn(
                            "w-full text-left p-3 rounded-lg transition-all duration-200 group",
                            selectedSection === section.id
                              ? "bg-blue-600/20 border border-blue-500/30 text-blue-300"
                              : "hover:bg-gray-800/50 text-gray-300 hover:text-white"
                          )}
                        >
                          <div className="flex items-center space-x-3">
                            <Icon className={cn(
                              "h-4 w-4 transition-colors",
                              selectedSection === section.id ? "text-blue-400" : "text-gray-400 group-hover:text-gray-300"
                            )} />
                            <div className="flex-1 min-w-0">
                              <div className="font-medium truncate">{section.title}</div>
                              <div className="text-xs text-gray-500 truncate">{section.description}</div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Footer */}
          <div className="p-4 border-t border-gray-700">
            <div className="text-xs text-gray-500 text-center">
              Need help? Check our{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300">support center</a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default DocsSidebar;