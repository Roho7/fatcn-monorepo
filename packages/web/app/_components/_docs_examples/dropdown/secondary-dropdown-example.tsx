import { Dropdown } from "fatcn-ui"

type Props = {}

const SecondaryDropdownExample = (props: Props) => {
  return (
     <Dropdown
        variant="secondary"
        triggerSize="sm"
        options={[
          {
            element: 'Option 1',
            action: (e) => console.log('Option 1 clicked'),
          },
          {
            element: 'Option 2',
            action: (e) => console.log('Option 2 clicked'),
          },
        ]}
      >
        Secondary Menu
      </Dropdown>
  )
}

export default SecondaryDropdownExample