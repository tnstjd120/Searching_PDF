import ReactMarkdown from 'react-markdown';

interface IMarkdownDisplay {
  markdownText: string;
}

const MarkdownDisplay = ({ markdownText }: IMarkdownDisplay) => {
  return <ReactMarkdown>{markdownText}</ReactMarkdown>;
};

export default MarkdownDisplay;
