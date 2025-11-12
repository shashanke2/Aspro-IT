import AdminHeader from "../components/admin/AdminHeader";
import ResourceManagement from '../components/admin/ResourceManagement'

export default function AdminResource() {
  return (
    <div className="relative">
      <AdminHeader />
      <ResourceManagement />
    </div>
  );
}
