import { Dropdown } from 'fatcn-ui'
import { ArrowRight01Icon, Logout01Icon, Mail01Icon, SchoolBell01Icon, Settings01Icon, UserCircle02Icon } from 'hugeicons-react'

const DropdownExample = () => {
  const handleSettingsClick = (e: Event) => {
    console.log('Settings clicked')
  }

  const handleLogout = (e: Event) => {
    console.log('Logout clicked')
  }

  return (
    <div className="flex gap-4">
      <Dropdown
        alignment="start"
        variant="default"
        triggerSize="sm"
        icon={<Settings01Icon className="h-4 w-4" />}
        rightSlot={<ArrowRight01Icon className="h-4 w-4" />}
        options={[
          {
            element: 'Profile Settings',
            icon: <UserCircle02Icon className="h-4 w-4" />,
            action: handleSettingsClick,
            suboptions: [
              {
                element: 'Notifications',
                icon: <SchoolBell01Icon className="h-4 w-4" />,
                action: (e) => console.log('Notifications clicked'),
              },
              {
                element: 'Email Preferences',
                icon: <Mail01Icon className="h-4 w-4" />,
                action: (e) => console.log('Email preferences clicked'),
              },
            ]
          },
          {
            element: 'Logout',
            icon: <Logout01Icon className="h-4 w-4" />,
            action: handleLogout,
          },
        ]}
      >
        Open Menu
      </Dropdown>
    </div>
  )
}

export default DropdownExample