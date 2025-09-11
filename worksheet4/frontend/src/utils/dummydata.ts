// 数据来源：TDD_Test_Data-3.docx Table 1 的 ID1-ID5 记录
const data = [
  {
    id: "1", // 对应TDD_Test_Data-3.docx ID1的唯一标识
    title: "An experimental evaluation of test driven development vs. test-last development with industry professionals",
    authors: "Munir, H., Wnuk, K., Petersen, K., Moayyed, M.",
    source: "EASE2014", // 来自TDD_Test_Data-3.docx的Source列
    pubyear: "2014", // 来自TDD_Test_Data-3.docx的Pub.Year列
    doi: "https://doi.org/10.1145/2601248.2601267", // 来自TDD_Test_Data-3.docx的DOI列
    claim: "code quality improvement", // 来自TDD_Test_Data-3.docx的Claim列（ID1：Code Quality Improvement）
    evidence: "strong support", // 来自TDD_Test_Data-3.docx的Evidence Level列（ID1：Strong support）
  },
  {
    _id: "2", // 用_id兼容（Worksheet 4代码中处理id ?? _id），对应TDD_Test_Data-3.docx ID2
    title: "An experimental evaluation of test driven development vs. test-last development with industry professionals",
    authors: "Munir, H., Wnuk, K., Petersen, K., Moayyed, M.",
    source: "EASE2014",
    pubyear: "2014",
    doi: "https://doi.org/10.1145/2601248.2601267",
    claim: "product quality improvement", // 来自TDD_Test_Data-3.docx ID2的Claim列（Product Quality Improvement）
    evidence: "weak support", // 来自TDD_Test_Data-3.docx ID2的Evidence Level列（Weak support）
  },
  {
    _id: "3", // 对应TDD_Test_Data-3.docx ID3
    title: "Realizing quality improvement through test driven development: results and experiences of four industrial teams",
    authors: "Nagappan, N., Maximilien, E. M., Bhat, T., Williams, L.",
    source: "Empirical Software Engineering, 13(3), 289–302",
    pubyear: "2008",
    doi: "", // TDD_Test_Data-3.docx ID3的DOI列为空，保持一致
    claim: "product quality improvement", // 来自TDD_Test_Data-3.docx ID3的Claim列（Product Quality Improvement）
    evidence: "weak support", // 来自TDD_Test_Data-3.docx ID3的Evidence Level列（Weak support）
  },
  {
    _id: "4", // 对应TDD_Test_Data-3.docx ID4
    title: "Does Test-Driven Development Really Improve Software Design Quality?",
    authors: "Janzen, D. S.",
    source: "Software, IEEE, 25(2) 77-84",
    pubyear: "2008",
    doi: "", // TDD_Test_Data-3.docx ID4的DOI列为空，保持一致
    claim: "code quality improvement", // 来自TDD_Test_Data-3.docx ID4的Claim列（Code Quality Improvement）
    evidence: "strong support", // 来自TDD_Test_Data-3.docx ID4的Evidence Level列（Strong support）
  },
  {
    _id: "5", // 对应TDD_Test_Data-3.docx ID5
    title: "Comparative Case Study on the Impact of Test-Driven Development on Program Design and Test Coverage",
    authors: "Siniaalto, M., Abrahamsson, P.",
    source: "ArXiv.Org, cs.SE, arXiv:1711.05082-284",
    pubyear: "2017",
    doi: "https://doi.org/10.1109/esem.2007.35", // 来自TDD_Test_Data-3.docx ID5的DOI列
    claim: "code quality improvement", // 来自TDD_Test_Data-3.docx ID5的Claim列（Code Quality Improvement）
    evidence: "weak against", // 来自TDD_Test_Data-3.docx ID5的Evidence Level列（Weak against）
  },
];

// 导出数据，供pages/articles/index.tsx等组件导入使用
export default data;