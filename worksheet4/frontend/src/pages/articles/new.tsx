import { FormEvent, useState } from "react";
import formStyles from "../../styles/Form.module.scss";

const NewDiscussion = () => {
  // 定义表单各字段的状态
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState<string[]>([]); // 作者为数组，支持多个
  const [source, setSource] = useState("");
  const [pubYear, setPubYear] = useState<number>(0);
  const [doi, setDoi] = useState("");
  const [summary, setSummary] = useState("");
  const [linkedDiscussion, setLinkedDiscussion] = useState("");

  // 表单提交处理函数
  const submitNewArticle = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 阻止表单默认刷新行为

    // 在控制台打印JSON格式的表单数据（后续可改为axios.post发送到后端）
    console.log(
      JSON.stringify({
        title,
        authors,
        source,
        publication_year: pubYear,
        doi,
        summary,
        linked_discussion: linkedDiscussion,
      }, null, 2) // 格式化JSON，便于查看
    );
  };

  // 作者数组的辅助方法：添加作者
  const addAuthor = () => {
    setAuthors(authors.concat([""])); // 新增一个空作者输入框
  };

  // 作者数组的辅助方法：删除指定索引的作者
  const removeAuthor = (index: number) => {
    setAuthors(authors.filter((_, i) => i !== index)); // 过滤掉要删除的作者
  };

  // 作者数组的辅助方法：修改指定索引的作者名称
  const changeAuthor = (index: number, value: string) => {
    setAuthors(
      authors.map((oldValue, i) => {
        return index === i ? value : oldValue; // 仅更新指定索引的作者值
      })
    );
  };

  // 渲染表单
  return (
    <div className="container">
      <h1>New Article</h1>
      {/* 表单，使用Form.module.scss中的样式，提交时触发submitNewArticle */}
      <form className={formStyles.form} onSubmit={submitNewArticle}>
        {/* 标题输入框 */}
        <label htmlFor="title">Title:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)} // 实时更新标题状态
          required // 必填项
        />

        {/* 作者输入区（支持动态添加/删除） */}
        <label htmlFor="author">Authors:</label>
        {authors.map((author, index) => (
          <div key={`author ${index}`} className={formStyles.arrayItem}>
            <input
              type="text"
              name="author"
              value={author}
              onChange={(event) => changeAuthor(index, event.target.value)} // 更新指定作者
              className={formStyles.formItem}
              required
            />
            <button
              onClick={() => removeAuthor(index)} // 删除当前作者
              className={formStyles.buttonItem}
              style={{ marginLeft: "3rem" }}
              type="button" // 注意：type为button，避免触发表单提交
            >
              -
            </button>
          </div>
        ))}
        {/* 添加作者按钮 */}
        <button
          onClick={() => addAuthor()}
          className={formStyles.buttonItem}
          style={{ marginLeft: "auto" }}
          type="button" // 注意：type为button，避免触发表单提交
        >
          +
        </button>

        {/* 来源输入框 */}
        <label htmlFor="source">Source:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="source"
          id="source"
          value={source}
          onChange={(event) => setSource(event.target.value)}
          required
        />

        {/* 发表年份输入框（数字类型） */}
        <label htmlFor="pubYear">Publication Year:</label>
        <input
          className={formStyles.formItem}
          type="number"
          name="pubYear"
          id="pubYear"
          value={pubYear || ""} // 处理0值显示为空（避免初始显示0）
          onChange={(event) => {
            const val = event.target.value;
            if (val === "") {
              setPubYear(0); // 空值时设为0
            } else {
              setPubYear(parseInt(val)); // 非空值转为数字
            }
          }}
          required
        />

        {/* DOI输入框 */}
        <label htmlFor="doi">DOI:</label>
        <input
          className={formStyles.formItem}
          type="text"
          name="doi"
          id="doi"
          value={doi}
          onChange={(event) => setDoi(event.target.value)}
          // DOI非必填，可留空
        />

        {/* 摘要文本域（多行输入） */}
        <label htmlFor="summary">Summary:</label>
        <textarea
          className={formStyles.formTextArea}
          name="summary"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
          required
        />

        {/* 提交按钮 */}
        <button className={formStyles.formItem} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewDiscussion;