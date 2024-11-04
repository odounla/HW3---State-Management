# HW3--State-Management

For this assignment, you are expected to do the following:

Submit a pull request containing:
Document that contains:

Answer :
(5 Points) The various states that an app can enter on React Native

In React Native, an app can transition through several states as it interacts with the operating system and user. Here’s an overview of the various states and their implications:

	1.	Active (Foreground)
	•	Description: The app is actively being used and is the focus on the screen.
	•	Considerations: In this state, the app should run any animations, start timers, and respond to user inputs immediately. It should also fetch data if necessary for real-time updates.
	•	Example: A social media feed updating content while the user is actively scrolling.
	2.	Inactive
	•	Description: The app is temporarily not receiving user input but remains in the foreground. This state usually occurs briefly during interruptions, like receiving a call.
	•	Considerations: Pausing intensive tasks, stopping sensitive actions (e.g., form submissions), or saving temporary data might be necessary.
	•	Example: Pausing a video when a call is received.
	3.	Background
	•	Description: The app is no longer in the foreground and may be partially suspended by the operating system.
	•	Considerations: Data should be saved to persistent storage. For apps that need background tasks (like location tracking), appropriate permissions are required. This is an opportunity to perform lightweight tasks like data saving and syncing.
	•	Example: Saving draft messages or user input when the app goes to the background.
	4.	Suspended
	•	Description: The app is in the background but completely stopped and not running any code.
	•	Considerations: When suspended, the app should have already saved any essential data or state. The OS can remove suspended apps from memory if resources are low, so the app may be fully closed without further notice to the app.
	•	Example: This is an OS-controlled state, so it’s crucial to save all data during the background state transition to ensure it is safe if the app is terminated.
	5.	Closed/Terminated
	•	Description: The app is completely closed and removed from memory.
	•	Considerations: Ensure the app’s state and user progress are saved properly. When the app starts again, it should restore the previous state if needed.
	•	Example: The app’s initial screen should handle loading any saved data for the user when they open it after a complete shutdown.

React Native API for State Management

	•	AppState: React Native’s AppState API lets you listen to the app’s current state and handle transitions between states.
	•	AsyncStorage: For persisting small pieces of data across sessions (helpful when managing closed/suspended states).

(5 Points) The various states that you must consider for your app, why you must consider it, and what must happen in each state.




(5 Points) The various states that you must consider for your app, why you must consider it, and what must happen in each state.

1. Active State

	•	Why Consider It: When the app is active, it’s in the foreground, and the user expects it to be fully interactive.
	•	What Should Happen:
	•	Display UI elements and animations.
	•	Fetch any required data for real-time interaction.
	•	Start or resume any tasks such as location tracking or live data feeds.

2. Inactive State

	•	Why Consider It: The app is still in the foreground but is temporarily not interacting with the user (e.g., during a phone call or Face ID scan). This state requires the app to be ready to transition smoothly to either the active or background state.
	•	What Should Happen:
	•	Pause animations and transitions.
	•	Prepare to save data or state if the app moves to the background.
	•	Suspend resource-intensive tasks to save battery.

3. Background State

	•	Why Consider It: When the app moves to the background, it’s no longer visible, and the system might need resources for other tasks. This state is crucial for saving data and ensuring the app can be resumed later.
	•	What Should Happen:
	•	Save the app state, such as user inputs and scroll positions, so it can be restored later.
	•	Pause or stop tasks that don’t need to run while the app is not visible (e.g., stopping animations, pausing video playback).
	•	Handle background tasks, like data syncing, as allowed by the platform.

4. Suspended State

	•	Why Consider It: In this state, the app is in memory but not executing code. It’s essential to ensure that data is saved before suspension, as the app can be terminated if the system needs more resources.
	•	What Should Happen:
	•	Make sure all critical data is saved to persistent storage (e.g., AsyncStorage or a database).
	•	Clean up unnecessary memory usage to allow the system to suspend the app smoothly.
	•	Prepare for a possible app termination, ensuring the app can be restored later without data loss.

5. Closed (Terminated) State

	•	Why Consider It: When the app is closed, either by the user or by the system (e.g., due to memory constraints), it must be ready to restart from a saved state. This state is crucial for data persistence and user experience.
	•	What Should Happen:
	•	Save the final state and any critical data (e.g., unsaved form inputs or session data) before the app is closed.
	•	Clear any sensitive data from memory (e.g., sensitive user information) for security.
	•	Prepare for a fresh start when the app is reopened, using saved data to provide a seamless experience for the user.

=======================================================================================================================

App that demonstrates:
(10 Points) Tombstone (suspend/resume) management
(e.g. demonstrate user going away and coming back to the same state as when the user left the app without exiting the app.
I am going to build an App for a Blog, 

(5 Points) The various states that you must consider for your app, why you must consider it, and what must happen in each state.
