interface UserLayoutProps {
  children: React.ReactNode
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-full items-center justify-center gap-2">
      {children}
    </div>
  )
}

export default UserLayout
