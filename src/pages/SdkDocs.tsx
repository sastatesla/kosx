import React, { useState, useMemo, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import {
  Search, Code, Settings, FileText, Zap, Globe, Shield,
} from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import DocsSidebar from '@/components/DocsSidebar';
import SearchResults from '@/components/SearchResult';
import Header from '@/components/Header';

interface DocSection {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  icon: React.ElementType;
  content: ''
}

const docSections: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    category: 'Basics',
    description: 'Learn how to set up and start using our SDK',
    tags: ['setup', 'installation', 'quickstart', 'init'],
    icon: Zap,
    content: '',
  },
  {
    id: 'payment',
    title: 'Payments',
    category: 'Integration',
    description: 'Secure your API calls with proper authentication',
    tags: ['auth', 'security', 'api-key', 'jwt', 'token'],
    icon: Shield,
    content: '',
  },
  {
    id: 'storage',
    title: 'Cloud Storage',
    category: 'Reference',
    description: 'Complete API documentation with examples',
    tags: ['api', 'endpoints', 'methods', 'rest', 'reference'],
    icon: Code,
    content: '',
  },
  // {
  //   id: 'configuration',
  //   title: 'Configuration',
  //   category: 'Setup',
  //   description: 'Configure the SDK for your specific needs',
  //   tags: ['config', 'settings', 'timeout', 'environment', 'options'],
  //   icon: Settings,
  // },
  // {
  //   id: 'webhooks',
  //   title: 'Webhooks',
  //   category: 'Integration',
  //   description: 'Set up real-time event notifications',
  //   tags: ['webhooks', 'events', 'notifications', 'real-time', 'integration'],
  //   icon: Globe,
  // },
  // {
  //   id: 'examples',
  //   title: 'Code Examples',
  //   category: 'Examples',
  //   description: 'Practical examples and use cases',
  //   tags: ['examples', 'code', 'samples', 'usage', 'tutorial'],
  //   icon: FileText,
  // }
];

const SDKDocs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSection, setSelectedSection] = useState('getting-started');
  const [markdown, setMarkdown] = useState('');

  const currentSection = docSections.find(section => section.id === selectedSection);

  const filteredSections = useMemo(() => {
    return docSections.filter(section => {
      const matchesSearch = searchQuery === '' ||
        section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' ||
        section.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const categories = ['all', ...Array.from(new Set(docSections.map(section => section.category)))];

  useEffect(() => {
    fetch(`/docs/${selectedSection}.md`)
      .then(res => res.text())
      .then(setMarkdown)
      .catch(() => setMarkdown("Documentation not found."));
  }, [selectedSection]);

  return (
    <div>
      <Header />
      <div className="min-h-screen mt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="flex">
          {/* @ts-ignore */}
          <DocsSidebar sections={docSections}
            selectedSection={selectedSection}
            onSectionSelect={setSelectedSection}
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />

          <div className="flex-1 lg:ml-80 mt-8">
            <div className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
              <div className="px-6 py-4 flex flex-col columns-2">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      SDK Documentation
                    </h1>
                    <p className="text-gray-400 mt-1">Comprehensive guide to our developer tools</p>
                  </div>
                  <div className="relative w-3/5 lg:visible hidden">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search documentation..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-gray-800/50 border-gray-600 focus:border-blue-500 focus:ring-blue-500/20 text-white placeholder-gray-400"
                    />
                  </div>
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-300">v1.1.0</Badge>
                </div>
              </div>
            </div>

            <div className="p-6">
              {searchQuery ? (
                          
    // @ts-ignore
                <SearchResults sections={filteredSections}
                  searchQuery={searchQuery}
                  onSectionSelect={setSelectedSection}
                />
              ) : (
                <div className="max-w-4xl">
                  {currentSection && (
                    <div className="space-y-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="p-2 bg-blue-600/20 rounded-lg">
                          <currentSection.icon className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-white">{currentSection.title}</h2>
                          <p className="text-gray-400 mt-1">{currentSection.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 mb-6">
                        <Badge variant="outline" className="border-gray-600 text-gray-300">
                          {currentSection.category}
                        </Badge>
                        {currentSection.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="bg-gray-700/50 text-gray-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Separator className="bg-gray-700" />

                      <Card className="bg-gray-800/50 border-gray-700">
                        <CardContent className="p-6">
                          <div className="prose prose-invert max-w-none text-white">
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              rehypePlugins={[rehypeHighlight]}
                            >
                              {markdown}
                            </ReactMarkdown>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDKDocs;
