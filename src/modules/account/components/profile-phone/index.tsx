"use client"

import { Customer } from "@medusajs/medusa"
import React, { useEffect } from "react"
import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"

import AccountInfo from "../account-info"
import { updateCustomerPhone } from "@modules/account/actions"

type MyInformationProps = {
  customer: Omit<Customer, "password_hash">
}

interface FormState {
  error: boolean
  success: boolean
}

const ProfileEmail: React.FC<MyInformationProps> = ({ customer }) => {
  const [successState, setSuccessState] = React.useState(false)

  const [state, formAction] = useFormState<FormState>(
    updateCustomerPhone as unknown as (
      state: FormState
    ) => FormState | Promise<FormState>,
    {
      error: false,
      success: false,
    }
  )

  const clearState = () => {
    setSuccessState(false)
  }

  useEffect(() => {
    setSuccessState(state.success)
  }, [state])

  return (
    <form action={formAction} className="w-full">
      <AccountInfo
        label="Phone"
        currentInfo={`${customer.phone}`}
        isSuccess={successState}
        isError={!!state.error}
        errorMessage={state.error ? state.error.toString() : ""}
        clearState={clearState}
        data-testid="account-phone-editor"
      >
        <div className="grid grid-cols-1 gap-y-2">
          <Input
            label="Phone"
            name="phone"
            type="phone"
            autoComplete="phone"
            required
            defaultValue={customer.phone}
            data-testid="phone-input"
          />
        </div>
      </AccountInfo>
    </form>
  )
}

export default ProfileEmail
