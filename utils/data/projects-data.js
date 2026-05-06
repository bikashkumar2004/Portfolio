export const projectsData = [
  {
    id: 1,
    name: "Nexus : An Agentic IDE",
    description:
      "Developed a cloud-based agentic IDE (Nexus) that combines a reactive AI assistant for on-demand code review and bug fixing with a proactive inline suggestion engine, providing developers with an intelligent, all-in-one coding environment. Fine-tuned DeepSeek-Coder-1.3B using QLoRA on a multi-task dataset of 10,000+ samples across code generation, bug detection, and secure code repair, then integrated the model into the IDE's real-time auto-completion engine.",
    tools: [
      "Next.js",
      "Node.js",
      "Monaco Editor",
      "WebContainers",
      "QLoRA",
      "PostgreSQL",
    ],
    role: "",
    code: "",
    demo: "",
  },
  {
    id: 2,
    name: "AI Enable CRM",
    description:
      "A unified CRM platform with an AI Voice Agent that automatically calls customers, understands their responses, and updates records—without any manual work. The system leverages real-time speech recognition and telephony integration to streamline customer relationship management and eliminate manual data entry.",
    tools: ["React.JS", "DeepGram", "Twilio"],
    role: "",
    code: "",
    demo: "",
  },
  {
    id: 3,
    name: "PDF Q&A System",
    description:
      "Developed a PDF Q&A system using a RAG (Retrieval-Augmented Generation) pipeline, chunking and indexing technical documents into a vector database to enable semantic search and context-aware answers, significantly reducing query response time. Fine-tuned a lightweight LLM with QLoRA on a large set of question-answer pairs extracted from diverse PDFs and integrated a chat interface for real-time document interrogation.",
    tools: [
      "LangChain",
      "FAISS",
      "Hugging Face Transformers",
      "PyPDF2",
      "QLoRA",
      "FastAPI",
    ],
    role: "",
    code: "",
    demo: "",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },