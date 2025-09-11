import { GetStaticProps, NextPage } from "next";
import SortableTable from "../../components/table/SortableTable";
import data from "../../utils/dummydata";

// 定义文章数据的接口，确保数据格式统一
interface ArticlesInterface {
  id: string;
  title: string;
  authors: string;
  source: string;
  pubyear: string;
  doi: string;
  claim: string;
  evidence: string;
}

// 定义页面接收的props类型
type ArticlesProps = {
  articles: ArticlesInterface[];
};

// 文章列表页面组件
const Articles: NextPage<ArticlesProps> = ({ articles }) => {
  // 定义表格表头：key对应ArticlesInterface的字段，label为表格显示的表头文本
  const headers: { key: keyof ArticlesInterface; label: string }[] = [
    { key: "title", label: "Title" },
    { key: "authors", label: "Authors" },
    { key: "source", label: "Source" },
    { key: "pubyear", label: "Publication Year" },
    { key: "doi", label: "DOI" },
    { key: "claim", label: "Claim" },
    { key: "evidence", label: "Evidence" },
  ];

  return (
    <div className="container">
      <h1>Articles Index Page</h1>
      <p>Page containing a table of articles:</p>
      {/* 引入可排序表格组件，传入表头和文章数据 */}
      <SortableTable headers={headers} data={articles} />
    </div>
  );
};

// 静态生成数据：在构建时加载dummydata中的数据，无需运行时请求
export const getStaticProps: GetStaticProps<ArticlesProps> = async (_) => {
  // 映射数据，处理id与_id兼容：优先用id，若无则用_id
  const articles = data.map((article) => ({
    id: article.id ?? article._id,
    title: article.title,
    authors: article.authors,
    source: article.source,
    pubyear: article.pubyear,
    doi: article.doi,
    claim: article.claim,
    evidence: article.evidence,
  }));

  return {
    props: {
      articles, // 将处理后的数据传入页面组件
    },
  };
};

export default Articles;