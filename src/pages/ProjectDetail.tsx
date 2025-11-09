import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const projectsData = [
  {
    id: 1,
    title: "Minimal Tech",
    category: "Product Design",
    year: "2024",
    description: "Революционный подход к дизайну технологических продуктов. Проект сочетает функциональность с эстетикой минимализма.",
    details: "Концепция основана на принципах чистоты форм и интуитивного взаимодействия. Каждый элемент тщательно продуман и имеет свою функцию.",
    client: "Tech Innovations",
    role: "Lead Designer",
    images: [
      "https://cdn.poehali.dev/projects/b25e10ab-9820-4032-ab92-f2a7f368841c/files/1f44a5d5-7107-43a9-9e35-37f622944697.jpg",
      "https://cdn.poehali.dev/projects/b25e10ab-9820-4032-ab92-f2a7f368841c/files/10d8b2ef-9f4d-49c7-920f-27768bbbe179.jpg"
    ]
  },
  {
    id: 2,
    title: "Urban Space",
    category: "Architecture",
    year: "2024",
    description: "Современное архитектурное решение для городской среды. Проект демонстрирует гармонию пространства и света.",
    details: "Здание спроектировано с учетом экологических стандартов и потребностей современного человека. Открытые пространства создают ощущение свободы.",
    client: "Urban Development Co.",
    role: "Architect",
    images: [
      "https://cdn.poehali.dev/projects/b25e10ab-9820-4032-ab92-f2a7f368841c/files/10d8b2ef-9f4d-49c7-920f-27768bbbe179.jpg",
      "https://cdn.poehali.dev/projects/b25e10ab-9820-4032-ab92-f2a7f368841c/files/d826084b-3dd5-43de-a655-a4873e182e9f.jpg"
    ]
  },
  {
    id: 3,
    title: "Abstract Forms",
    category: "Digital Art",
    year: "2024",
    description: "Исследование абстрактных форм в цифровом пространстве. Проект раскрывает новые грани восприятия.",
    details: "Использование минимальной палитры позволяет сосредоточиться на композиции и текстуре. Каждая работа — это медитация на тему формы.",
    client: "Digital Gallery",
    role: "Digital Artist",
    images: [
      "https://cdn.poehali.dev/projects/b25e10ab-9820-4032-ab92-f2a7f368841c/files/d826084b-3dd5-43de-a655-a4873e182e9f.jpg",
      "https://cdn.poehali.dev/projects/b25e10ab-9820-4032-ab92-f2a7f368841c/files/1f44a5d5-7107-43a9-9e35-37f622944697.jpg"
    ]
  },
  {
    id: 4,
    title: "Clean Lines",
    category: "Product Design",
    year: "2023",
    description: "Чистые линии и строгая геометрия определяют визуальный язык проекта.",
    details: "Проект фокусируется на деталях и точности исполнения. Каждая линия имеет значение.",
    client: "Design Studio",
    role: "Product Designer",
    images: [
      "https://cdn.poehali.dev/projects/b25e10ab-9820-4032-ab92-f2a7f368841c/files/1f44a5d5-7107-43a9-9e35-37f622944697.jpg"
    ]
  },
  {
    id: 5,
    title: "Future Vision",
    category: "Architecture",
    year: "2023",
    description: "Взгляд в будущее архитектурного дизайна.",
    details: "Инновационные решения для комфортной жизни в городах будущего.",
    client: "Future Corp",
    role: "Chief Architect",
    images: [
      "https://cdn.poehali.dev/projects/b25e10ab-9820-4032-ab92-f2a7f368841c/files/10d8b2ef-9f4d-49c7-920f-27768bbbe179.jpg"
    ]
  },
  {
    id: 6,
    title: "Form & Space",
    category: "Digital Art",
    year: "2023",
    description: "Взаимодействие формы и пространства в цифровой среде.",
    details: "Экспериментальная работа с композицией и перспективой.",
    client: "Art Collective",
    role: "Visual Artist",
    images: [
      "https://cdn.poehali.dev/projects/b25e10ab-9820-4032-ab92-f2a7f368841c/files/d826084b-3dd5-43de-a655-a4873e182e9f.jpg"
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4">Проект не найден</h1>
          <Link to="/">
            <Button variant="outline">Вернуться к проектам</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-neutral-200 sticky top-0 bg-white z-10">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="hover:bg-neutral-100"
          >
            <Icon name="ArrowLeft" size={20} />
            <span className="ml-2">Назад</span>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="text-sm text-neutral-500 uppercase tracking-wider mb-4">
              {project.category} / {project.year}
            </p>
            <h1 className="text-5xl font-light tracking-wide mb-8">
              {project.title}
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              {project.description}
            </p>
            <p className="text-neutral-600 leading-relaxed">
              {project.details}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-16 pb-16 border-b border-neutral-200">
            <div>
              <p className="text-sm text-neutral-500 uppercase tracking-wider mb-2">
                Клиент
              </p>
              <p className="text-neutral-900">{project.client}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-500 uppercase tracking-wider mb-2">
                Роль
              </p>
              <p className="text-neutral-900">{project.role}</p>
            </div>
          </div>

          <div className="space-y-12">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="w-full aspect-[16/10] overflow-hidden bg-neutral-50 animate-scale-in"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <img
                  src={image}
                  alt={`${project.title} - изображение ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-neutral-200 mt-32">
        <div className="container mx-auto px-6 py-8">
          <p className="text-sm text-neutral-400 text-center">© 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
