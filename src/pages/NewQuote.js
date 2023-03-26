import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";

function NewQuote() {
  const redirect = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    redirect.push("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
}

export default NewQuote;
