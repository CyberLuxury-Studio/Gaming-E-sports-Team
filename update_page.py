import os

page_path = "src/app/page.tsx"
with open(page_path, "r") as f:
    content = f.read()

import_stmt = 'import { LiveScoresSection } from "@/components/sections/LiveScoresSection";'
content = content.replace('import { FeaturesSection } from "@/components/sections/FeaturesSection";', 
                         import_stmt + '\nimport { FeaturesSection } from "@/components/sections/FeaturesSection";')

content = content.replace('<HeroSection />\n      <FeaturesSection />',
                         '<HeroSection />\n      <LiveScoresSection />\n      <FeaturesSection />')

with open(page_path, "w") as f:
    f.write(content)
