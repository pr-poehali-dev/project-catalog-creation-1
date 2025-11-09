import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Minimal Tech",
    category: "Product Design",
    image: "https://cdn.poehali.dev/projects/b25e10ab-9820-4032-ab92-f2a7f368841c/files/1f44a5d5-7107-43a9-9e35-37f622944697.jpg",
    year: "2024"
  },
  {
    id: 2,
    title: "Urban Space",
    category: "Architecture",
    image: "https://cdn.poehali.dev/projects/b25e10ab-9820-4032-ab92-f2a7f368841c/files/10d8b2ef-9f4d-49c7-920f-27768bbbe179.jpg",
    year: "2024"
  },
  {
    id: 3,
    title: "Abstract Forms",
    category: "Digital Art",
    image: "https://cdn.poehali.dev/projects/b25e10ab-9820-4032-ab92-f2a7f368841c/files/d826084b-3dd5-43de-a655-a4873e182e9f.jpg",
    year: "2024"
  },
  {
    id: 4,
    title: "Clean Lines",
    category: "Product Design",
    image: "https://cdn.poehali.dev/projects/b25e10ab-9820-4032-ab92-f2a7f368841c/files/1f44a5d5-7107-43a9-9e35-37f622944697.jpg",
    year: "2023"
  },
  {
    id: 5,
    title: "Future Vision",
    category: "Architecture",
    image: "https://cdn.poehali.dev/projects/b25e10ab-9820-4032-ab92-f2a7f368841c/files/10d8b2ef-9f4d-49c7-920f-27768bbbe179.jpg",
    year: "2023"
  },
  {
    id: 6,
    title: "Form & Space",
    category: "Digital Art",
    image: "https://cdn.poehali.dev/projects/b25e10ab-9820-4032-ab92-f2a7f368841c/files/d826084b-3dd5-43de-a655-a4873e182e9f.jpg",
    year: "2023"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-neutral-200">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-2xl font-light tracking-wide">ПРОЕКТЫ</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <Card className="border-0 shadow-none overflow-hidden bg-transparent animate-fade-in">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-50 mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-neutral-500 uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h2 className="text-xl font-light tracking-wide group-hover:tracking-widest transition-all duration-300">
                      {project.title}
                    </h2>
                    <p className="text-sm text-neutral-400">{project.year}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
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

export default Index;
