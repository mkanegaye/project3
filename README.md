# Crime Incidents in D.C. (2020, 2021)

![WashDC](https://github.com/user-attachments/assets/33fa4bbf-126b-4e95-8fa9-1247321bcdb5)

### Group Members: Meghan Kanegaye, Jason Crespo, Alex Maciel, Brian Loutzenhiser

### Purpose:
The main purpose of the third project for our group is to investigate the differences in Crime Incidents within the two years of data all regarding current events. 
In regards to specific current events; how things escalate quickly within the policital space around D.C.
As to also bring awareness of the state of certain areas to potentially help others be more aware, so they can stay safe during the political seasons.

### Instructions:
Crimes by Ward is filtered by crime type. User can select one of 9 different crime types to compare the occurrences of selected type in each ward. 
    Note the difference between theft, robbery, and burglary: theft involves taking someone else’s property without the owner’s consent; robbery is similar to theft, but includes an element of violence; burglary requires that an individual enters a structure or dwelling with the intent to commit a crime within. 

As part of our filtering process, we built in a function feature which can be edited to display another offense type within the logic.js file. This brief line of code also referenced in the image below ***if(feature.properties.OFFENSE==="HOMICIDE")return true*** can be edited and "HOMICIDE" replaced as needed to bring in different crime data.  This filter can also be duplicated and commented on/Off as needed while creating your visual aids. 
While we did initially attempt to add the filters to the map, the sheer size of the crime data prevented the added filters from being an optimal solution due to the power required to pull in all of the data points.

<img width="799" alt="image" src="https://github.com/user-attachments/assets/3d2631c9-2614-4623-83c2-d98187c1bb3a">

#### Streamlit Instructions
** Required Dependencies **:
 - streamlit
 - plotly

1. Open up your terminal and activate your virtual environment.
2. Navigate to the Repo folder where file "app.py" is located using the terminal.
3. Type `streamlit run app.py` and the app will run through a local server within your default browser.
4. Follow instructions within the app.

### Conclusions:
We analyzed the data to come to various conclusions about the timing of occurrences of crimes (both in terms of time of day and seasonality throughout the year) and where in the district sees the most occurrences of crimes (by Ward). 

From our analysis, we concluded that the most crimes occur during the midnight shift (11pm – 7 am), followed by 
	Evening (3pm – 11pm)
	Day (7am – 3)

Additionally, we observed a steep drop in the number of crimes reported in the Winter, specifically February through April, with crimes spiking in the Spring and Summer. Given the weather patterns experienced in Washington DC, it makes sense that crimes would shift in months where it is much colder out.
However, in comparison to January 2020, January 2021 saw a huge increase in crimes reported.

We wanted to see if there were any patterns to where crimes were committed.  
We observed that majority of crimes occurred in Ward 2, followed by 5 and 1. It is of note that wards 1 and 2 have a history of racial segregation and restrictive housing covenants. As such, the Western neighborhoods of DC (i.e., Wards 3 and 4) have been racially exclusive
(https://mappingsegregationdc.org/#maps).


### Ethical Considerations:

Avoiding Data Misuse: Ethical practices help prevent the misuse of data, such as using it for discriminatory, exploitative, or manipulative purposes. This is especially crucial when dealing with sensitive data that could potentially harm individuals in the sense of the giving information being misused.

Social Responsibility: Kept in mind data practices that reflect a broader sense of social responsibility, acknowledging the impact that data collection and the analysis of it can have on society at large. It’s about using data not just legally, but also in ways that contribute positively to societal well-being.

### References (Sources):
- https://github.com/svitkin/leaflet-timeline-slider/
- https://catalog.data.gov/dataset/crime-incidents-in-2020
- https://catalog.data.gov/dataset/crime-incidents-in-2021
