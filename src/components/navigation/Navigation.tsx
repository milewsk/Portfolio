import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ThemeButton from "../common/ThemeButton";

const Navigation = () => {
  return (
    <>
      <></>
      <NavigationMenu>
        <NavigationMenuList className="flex flex-row">
          <NavigationMenuItem className="px-2">
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="px-2">
            <NavigationMenuLink href="about">About</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="px-2">
            <NavigationMenuLink href="portfolio">Portfolio</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="px-2">
            <NavigationMenuLink href="contact">Contact</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <ThemeButton></ThemeButton>
      </NavigationMenu>
    </>
  );
};

export default Navigation;
