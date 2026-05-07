import { useState } from "react";

const Anecdotes = () => {
  const quotes = [
    "أفضل رسالة خطأ هي التي لا تظهر أبداً.",
    "أي أحمق يمكنه كتابة كود يفهمه الكمبيوتر، المبرمج الجيد يكتب كوداً يفهمه البشر.",
    "التجربة هي أفضل طريقة للتعلم.",
    "البرمجة ليست كتابة كود فقط، بل حل مشاكل."
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(quotes.length).fill(0));

  const vote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const mostVoted = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h1>حكمة اليوم</h1>
      <p>{quotes[selected]}</p>
      <p>عدد الأصوات: {votes[selected]}</p>

      <button onClick={vote}>صوّت</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * quotes.length))}>
        حكمة أخرى
      </button>

      <h2>الأكثر شعبية</h2>
      <p>{quotes[mostVoted]}</p>
      <p>{votes[mostVoted]} أصوات</p>
    </div>
  );
};

export default Anecdotes;