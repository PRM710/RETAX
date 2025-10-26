"use client";

export default function PrintInvoice({ invoiceId }) {
  const handlePrint = () => {
    const copies = prompt("Enter number of copies (1, 2, 3):", "1");
    const count = parseInt(copies);
    if (![1, 2, 3].includes(count)) {
      alert("Please enter 1, 2, or 3");
      return;
    }

    const invoiceContent = document.getElementById(invoiceId).innerHTML;
    let printContent = "";
    for (let i = 0; i < count; i++) {
      printContent += invoiceContent + "<hr>";
    }

    const newWin = window.open("");
    newWin.document.write(`<html><head><title>Invoice</title></head><body>${printContent}</body></html>`);
    newWin.document.close();
    newWin.print();
    newWin.close();
  };

  return (
    <button className="print-btn" onClick={handlePrint}>
      Print Invoice
    </button>
  );
}
