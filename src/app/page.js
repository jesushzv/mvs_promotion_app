import PositionedMenu from "./ui/PositionedMenu";
import UserForm from "./ui/UserForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <PositionedMenu></PositionedMenu>
    <UserForm></UserForm>
    </main>
  );
}
