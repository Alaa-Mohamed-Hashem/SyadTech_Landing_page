import styles from "./Marquee.module.css";

const Marquee = () => {
  const items = [
    "مرحبا بك في أخضر مكة",
    <a href="/greenmakkah/news/1" key="news-link">
      الفيصل يستعرض مبادرة أخضر مكة وآليات التوسع في المسطحات الخضراء بالمنطقة
    </a>,
    "مبادرة أخضر مكه نقله نوعية نحو تحقيق برنامج المملكة الخضراء",
    "تُشارك #هيئة_تطوير_منطقة_مكة بجناح تعريفي لمبادرة #أخضر_مكة",
    "الرئيس التنفيذي لـ #هيئة_تطوير_منطقة_مكة م.أحمد العارضي متحدثًا عن مبادرة #أخضر_مكة",
    "يمكنك الأن اكتشاف معالم مكه المكة المكرمه عن طريق المستكشف",
  ];
  return (
    <div className={styles.marquee}>
      <div className={styles.marqueeContent}>
        {items.map((text, index) => (
          <span key={index} className={styles.marqueeItem}>
            <span className={styles.marqueeSeparator}></span>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
