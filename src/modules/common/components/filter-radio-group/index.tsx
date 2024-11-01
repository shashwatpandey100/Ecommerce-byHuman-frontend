import React from "react"
import { Label, RadioGroup, Text, clx } from "@medusajs/ui"
import { ChangeEvent } from "react"

type FilterRadioGroupProps = {
  title: string
  items: {
    value: string
    label: string
  }[]
  value: any
  handleChange: (...args: any[]) => void
  "data-testid"?: string
}

const FilterRadioGroup = ({
  title,
  items,
  value,
  handleChange,
  "data-testid": dataTestId,
}: FilterRadioGroupProps) => {
  const [isSortOpen, setIsSortOpen] = React.useState(false)

  return (
    <div className="flex gap-x-3 flex-col gap-y-3 relative">
      <div
        onClick={() => setIsSortOpen(!isSortOpen)}
        className="border border-black px-4 py-2 uppercase text-[0.7rem] cursor-pointer whitespace-nowrap"
      >
        {title}
      </div>
      {isSortOpen && (
        <div className="border border-black bg-white absolute top-[40px] right-0 px-4 py-4 w-max z-[50]">
          <RadioGroup data-testid={dataTestId}>
            {items?.map((i) => (
              <div
                key={i.value}
                className={clx("flex gap-x-2 items-center pr-4", {
                  "mr-[-1.75rem]": i.value === value,
                })}
              >
                <RadioGroup.Item
                  checked={i.value === value}
                  onClick={(e) =>
                    handleChange(
                      e as unknown as ChangeEvent<HTMLButtonElement>,
                      i.value
                    )
                  }
                  className="hidden peer"
                  id={i.value}
                  value={i.value}
                />
                <Label
                  placeholder={i.label}
                  htmlFor={i.value}
                  className={clx(
                    "!txt-compact-small !transform-none text-black/50 hover:cursor-pointer",
                    {
                      "text-black": i.value === value,
                    }
                  )}
                  data-testid="radio-label"
                  data-active={i.value === value}
                >
                  {i.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      )}
    </div>
  )
}

export default FilterRadioGroup
