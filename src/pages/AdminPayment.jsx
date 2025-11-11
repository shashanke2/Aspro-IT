import AdminHeader from "../components/admin/AdminHeader";
import PaymentVerification from '../components/admin/PaymentVerification'

export default function AdminPayment() {
  return (
    <div className="relative">
      <AdminHeader />
      <PaymentVerification />
    </div>
  );
}
