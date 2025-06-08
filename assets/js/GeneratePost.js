// will generate and update posts.json with n number post 
// call with command "node ./assets/js/GeneratePost.js"

const fs = require('fs');

function getRandomDate(start, end) {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString();
}

function getRandomSubset(array, max = 2) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.floor(Math.random() * max) + 1);
}

function generatePosts(n = 50) {
  const categories = [
    "Web Development", "UI/UX", "Design", "DevOps", "Security",
    "Linux", "JavaScript", "Python", "Branding", "Portfolio",
    "Automation", "HTML/CSS", "Containers", "Refactoring",
    "APIs", "Freelance", "Responsive Design"
  ];

  const posts = [];

  for (let i = 1; i <= n; i++) {
    posts.push({
      title: `Post-${i}`,
      categories: getRandomSubset(categories),
      image: `../assets/img/work/work-${(i % 9) + 1}.jpg`,
      date: getRandomDate(new Date(2021, 0, 1), new Date(2024, 0, 1)),
      link: `#POST${i}`
    });
  }

  return posts;
}

// Generate and write to posts.json
const posts = generatePosts(200);
fs.writeFileSync('posts.json', JSON.stringify(posts, null, 2));
console.log('✅ posts.json created with 50 posts.');
