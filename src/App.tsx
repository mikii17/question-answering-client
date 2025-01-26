import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "./components/ui/sidebar";
import { Separator } from "./components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
} from "./components/ui/breadcrumb";
import { AppSidebar } from "./components/app-siderbar";
import Chat from "./components/chat";
import { QuestionProvider } from "./context/question";
import { AnswerProvider } from "./context/answer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QuestionProvider>
        <AnswerProvider>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                <div className="flex items-center gap-2 px-3">
                  <SidebarTrigger />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbPage>
                          Open Domain Question Answering
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
              </header>
              <div className="flex flex-1 flex-col gap-4">
                <Routes>
                  <Route path="/" element={<Chat />} />
                  <Route path="/report" element={<div>General report</div>} />
                  <Route
                    path="/retreiver"
                    element={<div>Retreiver report</div>}
                  />
                  <Route path="/reader" element={<div>Reader report</div>} />
                </Routes>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </AnswerProvider>
      </QuestionProvider>
    </ThemeProvider>
  );
}

export default App;
