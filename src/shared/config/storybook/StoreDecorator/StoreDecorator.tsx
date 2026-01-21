import { Story } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "entitiesModule/Profile";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { whiskyDetailsReducer } from "entitiesModule/Whisky/model/slice/whiskyDetailsSlice";
import { whiskyDetailsCommentsReducer } from "pages/WhiskyDetailsPage/model/slices/whiskyDetailsCommentsSlice";
import { addCommentFormReducer } from "features/addCommentForm/model/slices/addCommentFormSlice";
import { scrollSaveReducer } from "features/scrollSave";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  whiskyDetails: whiskyDetailsReducer,
  whiskyDetailsComments: whiskyDetailsCommentsReducer,
  addCommentForm: addCommentFormReducer,
  scrollSave: scrollSaveReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
