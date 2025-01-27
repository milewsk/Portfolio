import { Moon, Sun } from "lucide-react";

import { Theme, useTheme } from "@/utils/ThemeProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/Dropdown-Menu";
import { Button } from "../ui/Button";

const ThemeButton = () => {
  const { setTheme } = useTheme();

  return (
    <Button variant="outline" size="sm" onClick={() => setTheme(Theme.Dark)}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeButton;
