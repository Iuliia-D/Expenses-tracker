const ExpenseTitle = props => {
  return (
    <>
      <label>Title</label>
      <input
        type="text"
        value={props.enteredTitle}
        onChange={props.titleChangeHandler}
      />
    </>
  );
};
export default ExpenseTitle;
