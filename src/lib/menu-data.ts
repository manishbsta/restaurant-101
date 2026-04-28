export type DietaryTag = "vegan" | "gluten-free" | "dairy-free";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  dietary: DietaryTag[];
  image: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "starters",
    label: "Starters",
    items: [
      {
        id: "s1",
        name: "Himalayan Truffle Soup",
        description:
          "Wild mushroom velouté infused with juniper and black truffle, finished with smoked crème fraîche",
        price: "$24",
        dietary: ["gluten-free", "dairy-free"],
        image:
          "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
      },
      {
        id: "s2",
        name: "Charred Octopus",
        description:
          "Slow-braised tentacles over binchotan,/yuzu kosho, fingerling potato, and saffron aïoli",
        price: "$28",
        dietary: ["gluten-free"],
        image:
          "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
      },
      {
        id: "s3",
        name: "Heirloom Tomato Tartare",
        description:
          "Brandywine and green zebra tomatoes, Shallot vinaigrette, micro basil, macadamia cream",
        price: "$22",
        dietary: ["vegan", "gluten-free"],
        image:
          "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80",
      },
      {
        id: "s4",
        name: "Smoked Duck Breast",
        description:
          "Applewood-smoked duck, black garlic purée, pickled cherry, crispy shallots",
        price: "$32",
        dietary: ["gluten-free", "dairy-free"],
        image:
          "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80",
      },
      {
        id: "s5",
        name: "Beetroot & Cashew Ricotta",
        description:
          "Golden and crimson beets, house-made cashew ricotta, pistachio dukkah, aged balsamic",
        price: "$20",
        dietary: ["vegan", "gluten-free"],
        image:
          "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
      },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    items: [
      {
        id: "m1",
        name: "Wagyu A5 Tenderloin",
        description:
          "Japanese A5 wagyu, roasted bone marrow butter, charred broccolini, truffle jus",
        price: "$98",
        dietary: ["gluten-free"],
        image:
          "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
      },
      {
        id: "m2",
        name: "Pan-Seared Swordfish",
        description:
          "Mediterranean swordfish, saffron risotto, preserved lemon, harissa emulsion",
        price: "$46",
        dietary: ["gluten-free"],
        image:
          "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600&q=80",
      },
      {
        id: "m3",
        name: "Wild Mushroom Risotto",
        description:
          "Arborio rice with porcini, chanterelle, and maitake, finished with truffle oil and nutritional yeast",
        price: "$34",
        dietary: ["vegan", "gluten-free"],
        image:
          "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600&q=80",
      },
      {
        id: "m4",
        name: "Herb-Crusted Lamb Rack",
        description:
          "New Zealand lamb, herb crust, pomme purée, roasted fig, rosemary reduction",
        price: "$62",
        dietary: [],
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
      },
      {
        id: "m5",
        name: "Coconut Curry Cauliflower",
        description:
          "Whole roasted cauliflower, Thai coconut curry, crispy tofu, lime, Thai basil",
        price: "$30",
        dietary: ["vegan", "gluten-free", "dairy-free"],
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
      },
    ],
  },
  {
    id: "brunch",
    label: "Brunch",
    items: [
      {
        id: "b1",
        name: "Truffle Egg Benedict",
        description:
          "Poached organic eggs, black truffle hollandaise, house-baked brioche, smoked salmon",
        price: "$28",
        dietary: [],
        image:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80",
      },
      {
        id: "b2",
        name: "Açaí Power Bowl",
        description:
          "Organic açaí blend, granola, fresh berries, coconut flakes, agave drizzle",
        price: "$22",
        dietary: ["vegan", "gluten-free", "dairy-free"],
        image:
          "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=80",
      },
      {
        id: "b3",
        name: "Avocado Toast Royale",
        description:
          "Sourdough, smashed avocado, poached egg, chili flakes, microgreens, hemp seeds",
        price: "$24",
        dietary: ["dairy-free"],
        image:
          "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&q=80",
      },
      {
        id: "b4",
        name: "Matcha Pancake Stack",
        description:
          "Ceremonial matcha pancakes, coconut cream, fresh mango, maple syrup, edible flowers",
        price: "$26",
        dietary: ["vegan", "dairy-free"],
        image:
          "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&q=80",
      },
    ],
  },
];

export const dietaryLabels: Record<DietaryTag, string> = {
  vegan: "Vegan",
  "gluten-free": "Gluten-Free",
  "dairy-free": "Dairy-Free",
};

export const dietaryColors: Record<DietaryTag, string> = {
  vegan: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  "gluten-free": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "dairy-free": "bg-sky-500/20 text-sky-300 border-sky-500/30",
};