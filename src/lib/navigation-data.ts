export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationData: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Ski & Snow Wear",
    href: "/product-category/ski-snow-wear",
    children: [
      {
        label: "Outerwear",
        href: "/product-category/ski-snow-wear/outerwear",
        children: [
          { label: "Ski & Snowboarding Pants", href: "/product-category/ski-snow-wear/outerwear/ski-snowboarding-pants" },
          { label: "Ski & Snowboarding Jackets", href: "/product-category/ski-snow-wear/outerwear/ski-snowboarding-jackets" },
          { label: "Ski & Snowboard Bibs", href: "/product-category/ski-snow-wear/outerwear/custom-ski-suits" },
          { label: "Softshell Jackets", href: "/product-category/ski-snow-wear/outerwear/softshell-jackets" },
          { label: "Windbreakers", href: "/product-category/ski-snow-wear/outerwear/windbreakers" },
          { label: "Vests", href: "/product-category/ski-snow-wear/outerwear/vests" },
          { label: "Fleece Jackets", href: "/product-category/ski-snow-wear/outerwear/fleece-jackets" },
          { label: "Hoodies", href: "/product-category/ski-snow-wear/outerwear/hoodies" },
        ],
      },
      {
        label: "Base Layers",
        href: "/product-category/ski-snow-wear/base-layers",
        children: [
          { label: "Base Layer Jumpsuits", href: "/product-category/ski-snow-wear/base-layers/base-layer-jumpsuits" },
          { label: "Thermal Base Layer Tops", href: "/product-category/ski-snow-wear/base-layers/thermal-base-layer-tops" },
          { label: "Compression Base Layers", href: "/product-category/ski-snow-wear/base-layers/compression-base-layers" },
        ],
      },
      { label: "Snow Gloves & Mittens", href: "/product-category/ski-snow-wear/gloves-mittens" },
    ],
  },
  {
    label: "Streetwear",
    href: "/product-category/custom-streetwear",
    children: [
      {
        label: "T-Shirts",
        href: "/product-category/custom-streetwear/custom-t-shirts",
        children: [
          { label: "Basic T-Shirts", href: "/product-category/custom-streetwear/custom-t-shirts/basic-t-shirts" },
          { label: "Oversized & Streetwear T-Shirts", href: "/product-category/custom-streetwear/custom-t-shirts/oversized-streetwear-t-shirts" },
          { label: "Graphic & Printed T-Shirts", href: "/product-category/custom-streetwear/custom-t-shirts/graphic-printed-t-shirts" },
          { label: "Polo & Henley Shirts", href: "/product-category/custom-streetwear/custom-t-shirts/polo-henley-shirts" },
        ],
      },
      {
        label: "Hoodies & Sweatshirts",
        href: "/product-category/custom-streetwear/hoodies-sweatshirts",
        children: [
          { label: "Pullover Hoodies", href: "/product-category/custom-streetwear/hoodies-sweatshirts/pullover-hoodies" },
          { label: "Zipper Hoodies", href: "/product-category/custom-streetwear/hoodies-sweatshirts/zipper-hoodies" },
          { label: "Sweatshirts", href: "/product-category/custom-streetwear/hoodies-sweatshirts/sweat-shirts" },
        ],
      },
      { label: "Custom Shorts", href: "/product-category/custom-streetwear/custom-shorts" },
      { label: "Tracksuits & Co-ord Sets", href: "/product-category/custom-streetwear/custom-tracksuits-co-ord-sets" },
      { label: "Custom Jackets", href: "/product-category/custom-streetwear/custom-jackets" },
    ],
  },
  {
    label: "Sportswear",
    href: "/product-category/custom-sportswear",
    children: [
      {
        label: "Basketball",
        href: "/product-category/custom-sportswear/basketball",
        children: [
          { label: "Custom Basketball Jerseys", href: "/product-category/custom-sportswear/basketball/custom-basketball-jerseys" },
          { label: "Basketball Shorts", href: "/product-category/custom-sportswear/basketball/basketball-shorts" },
          { label: "Basketball Uniform Sets", href: "/product-category/custom-sportswear/basketball/basketball-uniform-sets" },
        ],
      },
      {
        label: "Soccer",
        href: "/product-category/custom-sportswear/soccer",
        children: [
          { label: "Custom Soccer Jerseys", href: "/product-category/custom-sportswear/soccer/custom-soccer-jerseys" },
          { label: "Soccer Shorts", href: "/product-category/custom-sportswear/soccer/soccer-shorts" },
          { label: "Soccer Uniform Sets", href: "/product-category/custom-sportswear/soccer/soccer-uniform-sets" },
        ],
      },
      { label: "American Football", href: "/product-category/custom-sportswear/american-football" },
      { label: "Rugby", href: "/product-category/custom-sportswear/rugby-wear" },
      { label: "Baseball", href: "/product-category/custom-sportswear/baseball" },
      { label: "Tennis", href: "/product-category/custom-sportswear/tennis" },
      { label: "Cricket", href: "/product-category/custom-sportswear/cricket" },
      { label: "Cycling", href: "/product-category/custom-sportswear/cycling" },
      { label: "Fitness & Gym Wear", href: "/product-category/custom-sportswear/fitness-wear" },
    ],
  },
  {
    label: "Bags",
    href: "/product-category/custom-bags",
    children: [
      { label: "Duffel Bags", href: "/product-category/custom-bags/duffel-bags" },
      { label: "Fanny Bags", href: "/product-category/custom-bags/fanny-bags" },
      { label: "Sports Backpack", href: "/product-category/custom-bags/sports-backpack" },
      { label: "Tote Bags/Shopping Bags", href: "/product-category/custom-bags/tote-bags-shopping-bags" },
    ],
  },
  {
    label: "Headwear & Accessories",
    href: "/product-category/sports-accessories",
    children: [
      {
        label: "Head Wears",
        href: "/product-category/head-wears",
        children: [
          { label: "Beanies & Winter Headwear", href: "/product-category/sports-accessories/beanies-winter-headwear" },
          { label: "Snapback & Flat-Brim Caps", href: "/product-category/sports-accessories/custom-snapback-caps" },
          { label: "Trucker & Mesh Caps", href: "/product-category/sports-accessories/trucker-mesh-caps" },
          { label: "5-Panel & Fashion Caps", href: "/product-category/sports-accessories/5-panel-fashion-caps" },
          { label: "Baseball & Sports Caps", href: "/product-category/sports-accessories/baseball-sports-caps" },
          { label: "Bucket Hats & Outdoor Hats", href: "/product-category/sports-accessories/outdoor-bucket-hats" },
        ],
      },
      { label: "Custom Patches & Badges", href: "/product-category/sports-accessories/custom-patches-badges" },
      { label: "Custom Socks", href: "/product-category/sports-accessories/custom-socks" },
      { label: "Custom Flags", href: "/product-category/sports-accessories/custom-flags" },
    ],
  },
  {
    label: "Customization Options",
    href: "/product-category/design-customization",
    children: [
      { label: "Custom Embroidery Options", href: "/product-category/design-customization/custom-embroidery" },
      { label: "Custom Printing Options", href: "/product-category/design-customization/printings-options" },
      { label: "Custom Rhinestone", href: "/product-category/design-customization/custom-rhinestone" },
      { label: "Labels/Tags", href: "/product-category/design-customization/labels-tags" },
      { label: "Leather Patches", href: "/product-category/design-customization/leather-patches" },
      { label: "Custom Packaging", href: "/product-category/design-customization/poly-bags" },
      { label: "PVC & Rubber Logos", href: "/product-category/design-customization/pvc-rubber-logos" },
    ],
  },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Contact Us", href: "/contact-us" },
];

export const categories = [
  {
    title: "Ski & Snow Wear",
    description: "Custom ski jackets, snowboard pants, base layers, insulated outerwear and winter accessories.",
    href: "/product-category/ski-snow-wear",
    icon: "snowflake",
  },
  {
    title: "Streetwear",
    description: "Hoodies, tees, flannel shirts, jackets, joggers, sweatshirts and fashion-focused private label streetwear.",
    href: "/product-category/street-wears",
    icon: "shirt",
  },
  {
    title: "Sportswear",
    description: "Basketball, soccer, baseball, rugby, cricket, cycling, fitness and teamwear built to your specs.",
    href: "/product-category/custom-sportswear",
    icon: "trophy",
  },
  {
    title: "Bags",
    description: "Duffel bags, sports backpacks, fanny bags, tote bags and supporting accessories for full collections.",
    href: "/product-category/bags-accessories",
    icon: "briefcase",
  },
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Share Your Design",
    description: "Send your tech pack, logo, reference image, artwork or sample details.",
  },
  {
    step: "02",
    title: "Confirm Materials",
    description: "Finalize fabric, colors, fit, branding, sizing and printing method.",
  },
  {
    step: "03",
    title: "Sample Development",
    description: "A sample is prepared for approval before moving into production.",
  },
  {
    step: "04",
    title: "Bulk Production",
    description: "Cutting, printing, stitching, finishing and branding are completed professionally.",
  },
  {
    step: "05",
    title: "Quality Check",
    description: "Products are checked for fit, print quality, stitching and finishing standards.",
  },
  {
    step: "06",
    title: "Packing & Shipment",
    description: "Orders are packed according to buyer requirements and prepared for shipment.",
  },
];

export const testimonials = [
  {
    quote: "We've been sourcing custom ski jackets from Core Sportswears for two seasons now. The quality is outstanding — stitching, zippers, and fabric all meet our European standards. Delivery was on time and samples were approved in just 5 days!",
    author: "James Whitfield",
    company: "SnowPeak Outerwear",
    avatar: "/avatars/avatar-1.jpg",
  },
  {
    quote: "Core Sportswears handled our full football kit order — jerseys, shorts, socks, and bags. Sublimation print quality was brilliant. Will definitely be placing repeat orders for our club.",
    author: "Sophie Müller",
    company: "Founder — UrbanThread Co",
    avatar: "/avatars/avatar-2.jpg",
  },
  {
    quote: "As a small startup, I was nervous about placing a bulk order. Core gave me a trial sample with no MOQ — quality blew me away. Now we order regularly. Highly recommend for any private label brand.",
    author: "Ashley Carter",
    company: "FitForm Activewear",
    avatar: "/avatars/avatar-3.jpg",
  },
];

export const stats = [
  { value: "No MOQ", label: "For First Trial Sample" },
  { value: "5-7 Days", label: "Sample Turnaround" },
  { value: "15-25 Days", label: "Bulk Production" },
  { value: "200+", label: "Machines In-House" },
];

export const footerLinks = {
  company: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Customer Services", href: "/customer-service" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "FAQ's", href: "/faqs" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Sitemap", href: "/sitemap" },
  ],
  collections: [
    { label: "Ski & Snow Wear", href: "/product-category/ski-snow-wear" },
    { label: "Street Wears", href: "/product-category/street-wears" },
    { label: "Sportswear", href: "/product-category/custom-sportswear" },
    { label: "Bags", href: "/product-category/bags-accessories" },
    { label: "Design Customization", href: "/product-category/design-customization" },
    { label: "Catalogue", href: "/catalogue" },
  ],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/coresportswear/", icon: "facebook" },
    { label: "Twitter", href: "https://twitter.com/coresportswears", icon: "twitter" },
    { label: "Instagram", href: "https://www.instagram.com/core_sportswears/", icon: "instagram" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abid-nisar-39270429", icon: "linkedin" },
    { label: "WhatsApp", href: "https://wa.me/923328624992", icon: "whatsapp" },
    { label: "Pinterest", href: "https://www.pinterest.com/coresportswears/", icon: "pinterest" },
  ],
};
