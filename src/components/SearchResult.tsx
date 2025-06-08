
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, FileText } from 'lucide-react';

interface DocSection {
  id: string;
  title: string;
  category: string;
  description: string;
  content: string;
  tags: string[];
  icon: React.ElementType;
}

interface SearchResultsProps {
  sections: DocSection[];
  searchQuery: string;
  onSectionSelect: (sectionId: string) => void;
}

const SearchResults = ({ sections, searchQuery, onSectionSelect }: SearchResultsProps) => {
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-500/30 text-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

 const getSearchSnippet = (content: string = '', query: string = '') => {
  // Now always safe
  if (!content) return '';
  if (!query) return content.substring(0, 150) + (content.length > 150 ? '...' : '');
  const lowerContent = content.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerContent.indexOf(lowerQuery);

  if (index === -1) return content.substring(0, 150) + (content.length > 150 ? '...' : '');

  const start = Math.max(0, index - 50);
  const end = Math.min(content.length, index + query.length + 100);
  const snippet = content.substring(start, end);

  return (start > 0 ? '...' : '') + snippet + (end < content.length ? '...' : '');
};

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Search className="h-5 w-5 text-blue-400" />
          <h2 className="text-xl font-semibold text-white">
            Search Results for "{searchQuery}"
          </h2>
        </div>
        <Badge variant="secondary" className="bg-gray-700/50 text-gray-300">
          {sections?.length} {sections?.length === 1 ? 'result' : 'results'}
        </Badge>
      </div>

      {sections.length === 0 ? (
        <Card className="bg-gray-800/50 border-gray-700">
          <CardContent className="p-8 text-center">
            <FileText className="h-12 w-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-300 mb-2">No results found</h3>
            <p className="text-gray-500">
              Try adjusting your search terms or browse the categories in the sidebar.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {sections.map(section => {
            const Icon = section.icon;
            return (
              <Card 
                key={section.id}
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-200 cursor-pointer group"
                onClick={() => onSectionSelect(section.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                        <Icon className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-white group-hover:text-blue-300 transition-colors">
                          {highlightText(section.title, searchQuery)}
                        </CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="border-gray-600 text-gray-400 text-xs">
                            {section.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-400 mb-3">
                    {highlightText(section.description, searchQuery)}
                  </CardDescription>
                  <div className="text-sm text-gray-500 leading-relaxed">
                    {highlightText(getSearchSnippet(section.content, searchQuery), searchQuery)}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {section.tags
                      .filter(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
                      .map(tag => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className="bg-yellow-500/20 text-yellow-300 text-xs"
                        >
                          {highlightText(tag, searchQuery)}
                        </Badge>
                      ))
                    }
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchResults;