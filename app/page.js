import PrintInvoice from "./PrintInvoice";

async function getInvoices() {
  const res = await fetch(
    "https://myjson.online/api/quick/a6274d23-cd8d-484c-9ad1-7b1981fa014d",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data;
}

export default async function Page() {
  const invoices = await getInvoices();

  return (
    <div className="invoice-container">
      <div className="invoice-header">
        <h1>Invoice</h1>
      </div>
      <div className="hr-line"></div>

      {invoices.map((inv) => (
        <div key={inv.invoice_number} id={`invoice-${inv.invoice_number}`}>
          <div className="invoice-item">
            <span>Invoice #:</span>
            <span>{inv.invoice_number}</span>
          </div>
          <div className="invoice-item">
            <span>Client:</span>
            <span>{inv.client_name}</span>
          </div>
          <div className="invoice-item">
            <span>Date:</span>
            <span>{inv.date}</span>
          </div>
          <div className="invoice-item">
            <span>Amount:</span>
            <span>{inv.amount}</span>
          </div>
          <div className="invoice-item">
            <span>Description:</span>
            <span>{inv.description}</span>
          </div>
          <div className="hr-line"></div>
          <PrintInvoice invoiceId={`invoice-${inv.invoice_number}`} />
        </div>
      ))}
    </div>
  );
}
