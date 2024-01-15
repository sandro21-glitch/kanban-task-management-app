const BoardColumns = () => {
  return (
    <article>
      <ul className="flex text-lightGray">
        <li className="min-w-[17.5em]">Todo (1)</li>
        <li className="min-w-[17.5em]">IN PROGRESS (0)</li>
        <li className="min-w-[17.5em]">Done (2)</li>
      </ul>
    </article>
  );
};

export default BoardColumns;
