"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Bell,
  BookOpen,
  Users,
  BarChart3,
  Settings,
  Plus,
  Search,
  Moon,
  Sun,
  FileText,
  TrendingUp,
  Award,
  Eye,
  Edit,
  Trash2,
  Download,
  Filter,
  MoreHorizontal,
  GraduationCap,
  Home,
} from "lucide-react"
import { motion } from "framer-motion"

export default function Dashboard() {
  const [isDark, setIsDark] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  const toggleTheme = () => setIsDark(!isDark)

  // Mock data
  const stats = [
    {
      title: "Total de Provas",
      value: "127",
      change: "+12%",
      trend: "up",
      icon: FileText,
      color: "text-[#00BFFF]",
    },
    {
      title: "Alunos Ativos",
      value: "1,234",
      change: "+8%",
      trend: "up",
      icon: Users,
      color: "text-green-500",
    },
    {
      title: "Média Geral",
      value: "8.7",
      change: "+0.3",
      trend: "up",
      icon: TrendingUp,
      color: "text-purple-500",
    },
    {
      title: "Taxa de Aprovação",
      value: "94%",
      change: "+2%",
      trend: "up",
      icon: Award,
      color: "text-orange-500",
    },
  ]

  const recentExams = [
    {
      id: 1,
      title: "Prova de Matemática - Álgebra",
      class: "9º Ano A",
      students: 28,
      completed: 25,
      average: 8.2,
      status: "completed",
      date: "2025-01-20",
    },
    {
      id: 2,
      title: "Avaliação de História - Brasil Colonial",
      class: "8º Ano B",
      students: 32,
      completed: 30,
      average: 7.8,
      status: "completed",
      date: "2025-01-18",
    },
    {
      id: 3,
      title: "Prova de Ciências - Sistema Solar",
      class: "7º Ano C",
      students: 25,
      completed: 18,
      average: 0,
      status: "active",
      date: "2025-01-22",
    },
    {
      id: 4,
      title: "Teste de Português - Interpretação",
      class: "9º Ano A",
      students: 28,
      completed: 0,
      average: 0,
      status: "draft",
      date: "2025-01-25",
    },
  ]

  const classes = [
    {
      id: 1,
      name: "9º Ano A",
      subject: "Matemática",
      students: 28,
      exams: 12,
      average: 8.2,
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "8º Ano B",
      subject: "História",
      students: 32,
      exams: 8,
      average: 7.8,
      color: "bg-green-500",
    },
    {
      id: 3,
      name: "7º Ano C",
      subject: "Ciências",
      students: 25,
      exams: 10,
      average: 8.5,
      color: "bg-purple-500",
    },
    {
      id: 4,
      name: "9º Ano B",
      subject: "Português",
      students: 30,
      exams: 15,
      average: 7.9,
      color: "bg-orange-500",
    },
  ]

  const sidebarItems = [
    { id: "overview", label: "Visão Geral", icon: Home },
    { id: "exams", label: "Provas", icon: FileText },
    { id: "classes", label: "Turmas", icon: Users },
    { id: "grades", label: "Notas", icon: BookOpen },
    { id: "reports", label: "Relatórios", icon: TrendingUp },
    { id: "settings", label: "Configurações", icon: Settings },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Concluída</Badge>
      case "active":
        return <Badge className="bg-[#00BFFF]/10 text-[#00BFFF] hover:bg-[#00BFFF]/10">Ativa</Badge>
      case "draft":
        return <Badge variant="outline">Rascunho</Badge>
      default:
        return <Badge variant="secondary">Desconhecido</Badge>
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "dark" : ""}`}>
      <SidebarProvider>
        <Sidebar className="border-r border-gray-200 dark:border-gray-700">
          <SidebarHeader className="border-b border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#00BFFF] rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full relative">
                  <div className="absolute top-1 left-1.5 w-1 h-1 bg-[#00BFFF] rounded-full"></div>
                  <div className="absolute top-1 right-1.5 w-1 h-1 bg-[#00BFFF] rounded-full"></div>
                  <div className="absolute top-3 left-2 w-2 h-1 bg-[#00BFFF] rounded-full"></div>
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-[#00BFFF] rounded-t-full"></div>
                </div>
              </div>
              <span
                className="text-xl font-bold text-gray-900 dark:text-white"
                style={{ fontFamily: "Lexend, sans-serif" }}
              >
                Minerva
              </span>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        asChild
                        isActive={activeTab === item.id}
                        onClick={() => setActiveTab(item.id)}
                        className="cursor-pointer"
                      >
                        <div className="flex items-center">
                          <item.icon className="mr-3 h-5 w-5" />
                          <span>{item.label}</span>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Ações Rápidas</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <Dialog>
                      <DialogTrigger asChild>
                        <SidebarMenuButton className="cursor-pointer">
                          <Plus className="mr-3 h-5 w-5" />
                          <span>Nova Prova</span>
                        </SidebarMenuButton>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Criar Nova Prova</DialogTitle>
                          <DialogDescription>
                            Preencha as informações básicas para criar uma nova prova.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Título da Prova</label>
                            <Input placeholder="Ex: Prova de Matemática - Álgebra" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Turma</label>
                            <Input placeholder="Selecione a turma" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Data da Prova</label>
                            <Input type="date" />
                          </div>
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline">Cancelar</Button>
                          <Button className="bg-[#00BFFF] hover:bg-[#00BFFF]/90">Criar Prova</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t border-gray-200 dark:border-gray-700 p-4">
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton className="cursor-pointer">
                      <Avatar className="h-8 w-8 mr-3">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" />
                        <AvatarFallback>PS</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">Prof. Silva</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">professor@escola.com</span>
                      </div>
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">Prof. Silva</p>
                        <p className="text-xs leading-none text-muted-foreground">professor@escola.com</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Perfil</DropdownMenuItem>
                    <DropdownMenuItem>Configurações</DropdownMenuItem>
                    <DropdownMenuItem>Suporte</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Sair</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset>
          {/* Header */}
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-200 dark:border-gray-700 px-6">
            <SidebarTrigger className="-ml-1" />
            <div className="h-4 w-px bg-gray-200 dark:bg-gray-700 mx-2" />
            <div className="flex-1">
              <h1
                className="text-2xl font-bold text-gray-900 dark:text-white"
                style={{ fontFamily: "Lexend, sans-serif" }}
              >
                Dashboard
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Bem-vindo de volta, Prof. Silva!</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar provas, turmas..."
                  className="pl-10 w-64 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                />
              </div>

              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </Button>

              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>PS</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Prof. Silva</p>
                      <p className="text-xs leading-none text-muted-foreground">professor@escola.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Perfil</DropdownMenuItem>
                  <DropdownMenuItem>Configurações</DropdownMenuItem>
                  <DropdownMenuItem>Suporte</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Sair</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {/* Content */}
          <main className="flex flex-1 flex-col gap-4 p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                              <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                              <p className={`text-sm ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                                {stat.change} vs mês anterior
                              </p>
                            </div>
                            <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-700 ${stat.color}`}>
                              <stat.icon className="h-6 w-6" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Recent Exams */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Provas Recentes</CardTitle>
                      <Button size="sm" className="bg-[#00BFFF] hover:bg-[#00BFFF]/90">
                        <Plus className="h-4 w-4 mr-2" />
                        Nova Prova
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentExams.slice(0, 4).map((exam) => (
                          <div
                            key={exam.id}
                            className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700"
                          >
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 dark:text-white">{exam.title}</h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{exam.class}</p>
                              <div className="flex items-center space-x-4 mt-2">
                                <span className="text-xs text-gray-500">
                                  {exam.completed}/{exam.students} alunos
                                </span>
                                {exam.status === "completed" && (
                                  <span className="text-xs text-gray-500">Média: {exam.average}</span>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {getStatusBadge(exam.status)}
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Eye className="h-4 w-4 mr-2" />
                                    Visualizar
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Edit className="h-4 w-4 mr-2" />
                                    Editar
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Download className="h-4 w-4 mr-2" />
                                    Exportar
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Classes Overview */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Minhas Turmas</CardTitle>
                      <Button size="sm" variant="outline">
                        <Users className="h-4 w-4 mr-2" />
                        Gerenciar
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {classes.map((classItem) => (
                          <div
                            key={classItem.id}
                            className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50 dark:bg-gray-700"
                          >
                            <div className={`w-3 h-3 rounded-full ${classItem.color}`}></div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 dark:text-white">{classItem.name}</h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{classItem.subject}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-gray-900 dark:text-white">
                                {classItem.students} alunos
                              </p>
                              <p className="text-xs text-gray-500">Média: {classItem.average}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Performance Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Performance das Turmas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {classes.map((classItem) => (
                        <div key={classItem.id} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium text-gray-900 dark:text-white">{classItem.name}</span>
                            <span className="text-gray-500">{classItem.average}/10</span>
                          </div>
                          <Progress value={classItem.average * 10} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Exams Tab */}
              <TabsContent value="exams" className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Provas</h2>
                    <p className="text-gray-500 dark:text-gray-400">Gerencie suas provas e avaliações</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filtrar
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-[#00BFFF] hover:bg-[#00BFFF]/90">
                          <Plus className="h-4 w-4 mr-2" />
                          Nova Prova
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Criar Nova Prova</DialogTitle>
                          <DialogDescription>
                            Preencha as informações básicas para criar uma nova prova.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Título da Prova</label>
                            <Input placeholder="Ex: Prova de Matemática - Álgebra" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Turma</label>
                            <Input placeholder="Selecione a turma" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Data da Prova</label>
                            <Input type="date" />
                          </div>
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline">Cancelar</Button>
                          <Button className="bg-[#00BFFF] hover:bg-[#00BFFF]/90">Criar Prova</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Prova</TableHead>
                          <TableHead>Turma</TableHead>
                          <TableHead>Alunos</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Média</TableHead>
                          <TableHead>Data</TableHead>
                          <TableHead className="text-right">Ações</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentExams.map((exam) => (
                          <TableRow key={exam.id}>
                            <TableCell className="font-medium">{exam.title}</TableCell>
                            <TableCell>{exam.class}</TableCell>
                            <TableCell>
                              {exam.completed}/{exam.students}
                            </TableCell>
                            <TableCell>{getStatusBadge(exam.status)}</TableCell>
                            <TableCell>{exam.status === "completed" ? exam.average : "-"}</TableCell>
                            <TableCell>{new Date(exam.date).toLocaleDateString("pt-BR")}</TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>
                                    <Eye className="h-4 w-4 mr-2" />
                                    Visualizar
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Edit className="h-4 w-4 mr-2" />
                                    Editar
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Download className="h-4 w-4 mr-2" />
                                    Exportar
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-red-600">
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Excluir
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Classes Tab */}
              <TabsContent value="classes" className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Turmas</h2>
                    <p className="text-gray-500 dark:text-gray-400">Gerencie suas turmas e alunos</p>
                  </div>
                  <Button className="bg-[#00BFFF] hover:bg-[#00BFFF]/90">
                    <Plus className="h-4 w-4 mr-2" />
                    Nova Turma
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {classes.map((classItem) => (
                    <motion.div
                      key={classItem.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: classItem.id * 0.1 }}
                    >
                      <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`w-4 h-4 rounded-full ${classItem.color}`}></div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Editar</DropdownMenuItem>
                                <DropdownMenuItem>Relatório</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Excluir</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{classItem.name}</h3>
                          <p className="text-gray-500 dark:text-gray-400 mb-4">{classItem.subject}</p>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">Alunos</span>
                              <span className="font-medium">{classItem.students}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">Provas</span>
                              <span className="font-medium">{classItem.exams}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">Média</span>
                              <span className="font-medium text-[#00BFFF]">{classItem.average}</span>
                            </div>
                          </div>
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <Button variant="outline" className="w-full bg-transparent">
                              <Users className="h-4 w-4 mr-2" />
                              Ver Alunos
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Other tabs content */}
              <TabsContent value="grades">
                <div className="text-center py-12">
                  <GraduationCap className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Seção de Notas</h3>
                  <p className="text-gray-500 dark:text-gray-400">Esta seção está em desenvolvimento.</p>
                </div>
              </TabsContent>

              <TabsContent value="reports">
                <div className="text-center py-12">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Relatórios</h3>
                  <p className="text-gray-500 dark:text-gray-400">Esta seção está em desenvolvimento.</p>
                </div>
              </TabsContent>

              <TabsContent value="settings">
                <div className="text-center py-12">
                  <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Configurações</h3>
                  <p className="text-gray-500 dark:text-gray-400">Esta seção está em desenvolvimento.</p>
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
