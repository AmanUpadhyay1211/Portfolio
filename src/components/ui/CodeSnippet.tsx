import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CodeSnippet as CodeSnippetType } from '../../types';
import { Copy, Check } from 'lucide-react';

interface CodeSnippetProps {
  snippet: CodeSnippetType;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ snippet }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg overflow-hidden">
      <div className="bg-gray-800 px-4 py-2 flex justify-between items-center">
        <span className="text-white text-sm font-medium">{snippet.title}</span>
        <button
          onClick={copyToClipboard}
          className="text-gray-300 hover:text-white transition"
          aria-label="Copy code"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
        </button>
      </div>
      <SyntaxHighlighter
        language={snippet.language}
        style={vs2015}
        customStyle={{
          margin: 0,
          padding: '1rem',
          fontSize: '0.875rem',
          lineHeight: 1.6,
          maxHeight: '250px',
          overflowY: 'auto',
        }}
      >
        {snippet.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;