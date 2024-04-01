import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getReadingTime(content) {
  const wordsPerMinute = 200; // Average reading speed
  const imageReadingTime = 12; // Estimated reading time for an image
  const punctuationReadingTime = 0.05; // Estimated reading time for punctuation

  const wordCount = content.split(" ").length;
  const imageCount = (content.match(/<img /g) || []).length;
  const punctuationCount = (content.match(/[.,:;]/g) || []).length;

  const readingTime =
    wordCount / wordsPerMinute +
    imageCount * imageReadingTime +
    punctuationCount * punctuationReadingTime;

  return Math.ceil(readingTime);
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    let readingTime = getReadingTime(content);
    return {
      metadata,
      slug,
      content,
      readingTime,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "content"));
}
