"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Moon, Sun, BookOpen, Users, BarChart3, Shield, Zap, Award, ChevronRight, Star, Check } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function MinervaLanding() {
  const [isDark, setIsDark] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const features = [
    {
      icon: BookOpen,
      title: "Criação de Provas Inteligente",
      description:
        "Crie provas personalizadas com nossa IA avançada, adaptadas ao nível e necessidades dos seus alunos.",
    },
    {
      icon: BarChart3,
      title: "Controle de Notas Avançado",
      description: "Gerencie notas e acompanhe o progresso dos alunos com relatórios detalhados e insights valiosos.",
    },
    {
      icon: Users,
      title: "Gestão de Turmas",
      description: "Organize suas turmas, distribua atividades e mantenha comunicação eficiente com todos os alunos.",
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Seus dados e dos seus alunos estão protegidos com criptografia de ponta e backup automático.",
    },
    {
      icon: Zap,
      title: "Performance Otimizada",
      description: "Interface rápida e responsiva que funciona perfeitamente em qualquer dispositivo.",
    },
    {
      icon: Award,
      title: "Certificações",
      description: "Gere certificados automáticos e acompanhe conquistas dos alunos ao longo do tempo.",
    },
  ]

  const testimonials = [
    {
      name: "Prof. Ana Silva",
      role: "Professora de Matemática",
      content: "A Minerva revolucionou minha forma de ensinar. Consigo criar provas personalizadas em minutos!",
      rating: 5,
    },
    {
      name: "Dr. Carlos Santos",
      role: "Coordenador Pedagógico",
      content:
        "O controle de notas nunca foi tão simples. Os relatórios me ajudam a identificar dificuldades rapidamente.",
      rating: 5,
    },
    {
      name: "Profa. Maria Costa",
      role: "Diretora Acadêmica",
      content: "Implementamos a Minerva em toda escola. O resultado foi impressionante no engajamento dos alunos.",
      rating: 5,
    },
  ]

  const plans = [
    {
      name: "Básico",
      price: "R$ 29",
      period: "/mês",
      description: "Perfeito para professores individuais",
      features: ["Até 3 turmas", "50 provas por mês", "Relatórios básicos", "Suporte por email"],
      popular: false,
    },
    {
      name: "Profissional",
      price: "R$ 79",
      period: "/mês",
      description: "Ideal para escolas pequenas e médias",
      features: [
        "Turmas ilimitadas",
        "Provas ilimitadas",
        "Relatórios avançados",
        "Suporte prioritário",
        "Integrações",
        "Backup automático",
      ],
      popular: true,
    },
    {
      name: "Institucional",
      price: "Personalizado",
      period: "",
      description: "Para grandes instituições",
      features: [
        "Tudo do Profissional",
        "API personalizada",
        "Treinamento dedicado",
        "Suporte 24/7",
        "Customizações",
        "Gerente de conta",
      ],
      popular: false,
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "dark" : ""}`}>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/Minerva_brandmark_principal_azul_v1.svg" alt="Minerva Logo" width={40} height={40} />
            <span
              className="text-2xl font-bold text-gray-900 dark:text-white"
              style={{ fontFamily: "Lexend, sans-serif" }}
            >
              Minerva
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#recursos" className="text-gray-600 dark:text-gray-300 hover:text-[#00BFFF] transition-colors">
              Recursos
            </a>
            <a href="#depoimentos" className="text-gray-600 dark:text-gray-300 hover:text-[#00BFFF] transition-colors">
              Depoimentos
            </a>
            <a href="#precos" className="text-gray-600 dark:text-gray-300 hover:text-[#00BFFF] transition-colors">
              Preços
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white">Começar Agora</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-[#00BFFF]/5 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <motion.div className="absolute inset-0 opacity-10" style={{ y }}>
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#00BFFF] rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-[#00BFFF] rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-[#00BFFF] rounded-full blur-xl"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-[#00BFFF]/10 text-[#00BFFF] border-[#00BFFF]/20 hover:bg-[#00BFFF]/20">
                ✨ Plataforma Educacional Inteligente
              </Badge>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              variants={fadeInUp}
              style={{ fontFamily: "Lexend, sans-serif" }}
            >
              Desperte a{" "}
              <span className="text-[#00BFFF] relative">
                Sabedoria
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-[#00BFFF]/30 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>{" "}
              em Cada Aluno
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              A Minerva é a plataforma completa para criação de provas personalizadas e controle de notas. Transforme
              sua metodologia de ensino com inteligência artificial e insights poderosos.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={fadeInUp}>
              <Button
                size="lg"
                className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Começar Gratuitamente
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg rounded-xl border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 bg-transparent"
              >
                Ver Demonstração
              </Button>
            </motion.div>

            <motion.div
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
              variants={staggerContainer}
            >
              {[
                { number: "10k+", label: "Professores Ativos" },
                { number: "500k+", label: "Provas Criadas" },
                { number: "98%", label: "Satisfação" },
              ].map((stat, index) => (
                <motion.div key={index} className="text-center" variants={fadeInUp}>
                  <div className="text-3xl font-bold text-[#00BFFF] mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              style={{ fontFamily: "Lexend, sans-serif" }}
            >
              Recursos Poderosos para Educadores
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Descubra como a Minerva pode transformar sua experiência de ensino com ferramentas inteligentes e
              intuitivas.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-[#00BFFF]/10 group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-[#00BFFF]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00BFFF]/20 transition-colors">
                      <feature.icon className="h-7 w-7 text-[#00BFFF]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              style={{ fontFamily: "Lexend, sans-serif" }}
            >
              O Que Dizem Nossos Educadores
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Milhares de professores já transformaram suas aulas com a Minerva. Veja alguns depoimentos.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white dark:bg-gray-900 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              style={{ fontFamily: "Lexend, sans-serif" }}
            >
              Planos Para Cada Necessidade
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Escolha o plano ideal para você ou sua instituição. Todos incluem suporte completo e atualizações
              gratuitas.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            {plans.map((plan, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`h-full relative ${plan.popular ? "border-[#00BFFF] border-2 shadow-xl" : "border-gray-200 dark:border-gray-700"}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-[#00BFFF] text-white px-4 py-1">Mais Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                        <span className="text-gray-600 dark:text-gray-300 ml-1">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="h-5 w-5 text-[#00BFFF] mr-3 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full py-6 text-lg rounded-xl transition-all duration-300 ${
                        plan.popular
                          ? "bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white shadow-lg"
                          : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                      }`}
                    >
                      {plan.name === "Institucional" ? "Falar com Vendas" : "Começar Agora"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00BFFF] to-[#00BFFF]/80">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: "Lexend, sans-serif" }}>
              Pronto para Transformar sua Educação?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Junte-se a milhares de educadores que já descobriram o poder da Minerva. Comece gratuitamente hoje mesmo e
              veja a diferença em suas aulas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#00BFFF] hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Começar Teste Gratuito
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#00BFFF] px-8 py-6 text-lg rounded-xl transition-all duration-300 bg-transparent"
              >
                Agendar Demonstração
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image src="/Minerva_brandmark_principal_azul_v1.svg" alt="Minerva Logo" width={40} height={40} />

              <span className="text-2xl font-bold text-white" style={{ fontFamily: "Lexend, sans-serif" }}>
                Minerva
              </span>
            </div>

            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 Minerva. Todos os direitos reservados.</p>
              <p className="text-sm mt-1">Desenvolvido com sabedoria e tecnologia.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
