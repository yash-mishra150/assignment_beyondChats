import { dataType } from '@/app/constants/data'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CurrentSelectorState {
  value: dataType
}

const initialState: CurrentSelectorState = {
  value:  {
        id: 0,
        name: "",
        clinetCompany: "",
        unreadcount: 0,
        lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        lastMessageTime: new Date(2025, 4, 23, 14, 30), // May 23, 2025, 2:30 PM
    },
}

export const currentSelectorSlice = createSlice({
  name: 'currentSelector',
  initialState,
  reducers: {
    setCurrentItem: (state, action: PayloadAction<dataType>) => {
      state.value = action.payload
    },
    clearCurrentItem: (state) => {
      state.value = initialState.value
    },
    updateUnreadCount: (state, action: PayloadAction<number>) => {
      state.value.unreadcount = action.payload
    },
  },
})

export const { setCurrentItem, clearCurrentItem, updateUnreadCount } = currentSelectorSlice.actions
export default currentSelectorSlice.reducer
