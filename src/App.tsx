import { motion } from "framer-motion";
import { Shield, Key, Users, CreditCard } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="w-full px-8 py-4 flex justify-between items-center bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">K-Vault</h1>
        <nav className="space-x-6">
          <a href="#features" className="text-gray-700 hover:text-blue-600">Funcionalidades</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600">Planos</a>
          <a href="#cta" className="px-4 py-2 rounded-lg  text-zinc-100">Começar</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-8 py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold mb-4"
        >
          Armazene suas chaves e tokens com segurança
        </motion.h2>
        <p className="max-w-xl mb-6 text-lg opacity-90">
          K-Vault é o cofre digital para desenvolvedores e empresas. Proteja suas
          chaves de API e tokens em um só lugar, com segurança da AWS.
        </p>
        <a
          href="#cta"
          className="px-6 py-3 rounded-xl bg-white text-blue-700 font-semibold shadow hover:bg-gray-100"
        >
          Crie sua conta
        </a>
      </section>

      {/* Features */}
      <section id="features" className="px-8 py-20 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-12 text-blue-600">Por que usar o K-Vault?</h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<Shield className="w-10 h-10 text-blue-600" />}
            title="Segurança"
            desc="Armazenamento criptografado com AWS Secrets Manager."
          />
          <FeatureCard
            icon={<Key className="w-10 h-10 text-blue-600" />}
            title="Organização"
            desc="Separe segredos por projeto e compartilhe com seu time."
          />
          <FeatureCard
            icon={<Users className="w-10 h-10 text-blue-600" />}
            title="Colaboração"
            desc="Adicione usuários ao seu projeto de forma segura e controlada."
          />
          <FeatureCard
            icon={<CreditCard className="w-10 h-10 text-blue-600" />}
            title="Assinatura simples"
            desc="Planos individuais e organizacionais, pagos via cartão de crédito."
          />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-8 py-20">
        {/* Título da seção de planos, usando cor azul para consistência */}
        <h3 className="text-3xl font-bold text-center mb-12 text-blue-600">Planos</h3>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <PricingCard
            title="Individual"
            price="R$29/mês"
            features={[
              "Até 2 usuários por projeto",
              "Armazenamento seguro de segredos",
              "Suporte por e-mail",
            ]}
          />
          <PricingCard
            title="Organização"
            price="R$99/mês"
            features={[
              "Até 5 usuários por projeto",
              "Armazenamento seguro de segredos",
              "Compartilhamento simplificado",
              "Suporte prioritário",
            ]}
            highlight
          />
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="px-8 py-20 bg-gradient-to-r from-indigo-700 to-blue-600 text-white text-center"
      >
        <h3 className="text-3xl font-bold mb-4">Pronto para proteger suas chaves?</h3>
        <p className="mb-6 opacity-90">
          Crie sua conta agora mesmo e comece a usar o K-Vault em minutos.
        </p>
        <a
          href="#"
          className="px-6 py-3 rounded-xl bg-white text-blue-700 font-semibold shadow hover:bg-gray-100"
        >
          Criar conta
        </a>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 bg-white shadow-inner text-center text-gray-600">
        © {new Date().getFullYear()} K-Vault. Todos os direitos reservados.
      </footer>
    </div>
  );
}

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
      <div className="mb-4">{icon}</div>
      {/* Título do card de funcionalidade, usando uma cor mais escura */}
      <h4 className="font-semibold text-lg mb-2 text-gray-800">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

type PricingCardProps = {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
};

function PricingCard({ title, price, features, highlight }: PricingCardProps) {
  return (
    <div
      className={`rounded-2xl p-8 shadow-lg ${
        highlight ? "bg-blue-600 text-white" : "bg-white"
      }`}
    >
      <h4
        className={`text-xl font-bold mb-4 ${
          highlight ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </h4>
      {/* Preço e lista de funcionalidades, usando cores consistentes */}
      <p className={`text-3xl font-extrabold mb-6 ${highlight ? "text-white" : "text-gray-900"}`}>{price}</p>
      <ul className={`space-y-3 mb-6 ${highlight ? "text-white" : "text-gray-700"}`}>
        {features.map((f, i) => (
          <li key={i} className="flex items-center">
            <span className="mr-2">✔</span> {f}
          </li>
        ))}
      </ul>
      <a
        href="#cta"
        className={`block text-center px-6 py-3 rounded-xl font-semibold ${
          highlight
            ? "bg-white text-blue-600 hover:bg-gray-100"
            : "bg-blue-600 text-gray-50 hover:bg-blue-700"
        }`}
      >
        Assinar
      </a>
    </div>
  );
}