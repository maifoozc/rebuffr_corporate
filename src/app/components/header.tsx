"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer_image from "../assets/Footer_image.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products" },
  { label: "Ingenium EMS", href: "/ingenium" },
  { label: "Contact Us", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className="flex justify-between items-center p-4 shadow-md sticky top-0 z-10"
      style={{
        backgroundImage: `url(${Footer_image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Image
        src="https://i.ibb.co/34gkbYp/sz.png"
        alt="logo"
        width={184}
        height={100}
        priority
        className="header_image cursor-pointer"
      />

      <nav className="hidden md:flex gap-6 text-white font-medium">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative flex flex-col items-center"
          >
            <span
              style={{
                color: pathname === item.href ? "rgba(51, 196, 129, 1)" : "",
              }}
            >
              {item.label}
            </span>
            {pathname === item.href && (
              <span
                className="w-1 h-1  rounded-full mt-1"
                style={{ backgroundColor: "rgba(51, 196, 129, 1)" }}
              />
            )}
          </Link>
        ))}
      </nav>

      <div className="md:hidden">
        <IconButton onClick={handleMenuOpen} sx={{ color: "white" }}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {navItems.map((item) => (
            <MenuItem
              key={item.href}
              onClick={handleMenuClose}
              sx={{
                color:
                  pathname === item.href ? "rgba(51, 196, 129, 1)" : "inherit",
                fontWeight: pathname === item.href ? 600 : 400,
              }}
            >
              <Link href={item.href}>{item.label}</Link>
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default Header;
