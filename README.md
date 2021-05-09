# Architecture thoughts

- UI: Should be very dumb, almost always should just take in props and spit out UI. Almost all logic should be abstracted to a higher level such as components/layouts

- Components: More state/logic based units that either get or are passed data, do something with it or just pass it straight to UI

- Layouts: Meant for packaging up and organizing the UI (May merge this back into the components/smart components category. We'll burn that bridge when we get to it.)

- All form components are exported as a UI object via UI/index.js. From there the data can specify the UI component that it should be built with in FormBuilder.js

# UI Patterns:

- Read that 40px is about the minimum that is really useable for inputs on mobile.

# Future Feature:

- User registration/login

- Full new form navigation (mobile)

- full new team navigation (mobile)

- full new project navigation (mobile)

- storing forms created/submitted while offline

- expand input type support

- password reset

- form submission logic

- form retrieval logic

- ~~pagination of forms on various devices~~

- ~~Add new navigation~~

- ~~Dynamic form storage pattern~~

- User profile view

- Profile editing

- Routing

-
