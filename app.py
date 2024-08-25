# Import dependencies
import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import plotly.express as px

# Set page layout
st.set_page_config(layout="wide")

# Add a title and intro text
st.title('Crime Data Explorer')
st.text('This is a web app to allow exploration of 2020 and 2021 Crime Data in D.C. from Group 3.')

# Sidebar setup
st.sidebar.title('Navigation')
uploaded_file = st.sidebar.file_uploader('Upload a file containing Crimes data')
options = st.sidebar.radio('Select what you want to display:', ['Home', 'Data Summary', 'Data Header', 'Interactive Bar Plot', 'Interactive Line Plot'])

# Functions for each of the pages within the sidebar
def home(uploaded_file):
    if uploaded_file:
        st.subheader('Begin exploring the data using the menu on the left')
    else:
        st.subheader(' <- To begin please upload a file')
        st.text('Please upload one file at a time.')
        st.text('Files to be uploaded:\n - crimes2019_count_shift.csv\n - crimes2020_count_shift.csv\n - crimes2021_count_shift.csv\n - months2020.csv\n - months2021.csv' )

def data_summary():
    df = pd.read_csv(uploaded_file)
    st.header('Statistics of Dataframe')
    st.write(df.describe())

def data_header():
    df = pd.read_csv(uploaded_file)
    st.header('Header of Dataframe')
    st.write(df.head())

def interactive_bar_plot():
    df = pd.read_csv(uploaded_file)
    col1, col2 = st.columns(2)
    
    st.subheader('Remember to have the X-axis and Y-axis as different values.')
    st.text('When analysing the months202X csv files X-axis is MONTH and Y-axis is Count')
    x_axis_val = col1.selectbox('Select the X-axis', options=df.columns)
    y_axis_val = col2.selectbox('Select the Y-axis', options=df.columns)
    # col = st.color_picker('Select a color for the plot:')

    plot = px.bar(df, x=x_axis_val, y=y_axis_val)
    # plot.update_traces(marker = dict(color = col))
    st.plotly_chart(plot, use_container_width=True)

def interactive_line_plot():
    df = pd.read_csv(uploaded_file)
    col1, col2 = st.columns(2)
    
    st.subheader('Remember to have the X-axis and Y-axis as different values.')
    st.write('This line plot is mainly for analysing the **months2020** and **months 2021** csv files X-axis is MONTH and Y-axis is Count')
    x_axis_val = col1.selectbox('Select the X-axis', options=df.columns)
    y_axis_val = col2.selectbox('Select the Y-axis', options=df.columns)

    plot = px.line(df, x=x_axis_val, y=y_axis_val)
    st.plotly_chart(plot, use_container_width=True)

# Navigation options
if options == 'Home':
    home(uploaded_file),
elif options == 'Data Summary':
    data_summary(),
elif options == 'Data Header':
    data_header(),
elif options == 'Interactive Bar Plot':
    interactive_bar_plot()
elif options == 'Interactive Line Plot':
    interactive_line_plot()