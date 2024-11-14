# Function to generate the HTML snippet based on user inputs
def generate_html():
    # Asking for user inputs for each placeholder
    product_link = input("Enter the product link: ")
    product_title = input("Enter the product title: ")
    subtitle = input("Enter the subtitle: ")
    image_link = input("Enter the image link: ")

    # HTML template with placeholders and comments
    html_template = f"""
<!-- {product_title} -->
<a href="{product_link}" target="_blank" class="product">
    <div class="product-title">
      <p>
        {product_title} <br />
        <span class="untertitel">{subtitle}</span>
      </p>
    </div>
    <img class="product-image" src="{image_link}" alt="{product_title}" />
    <label class="switch">
      <input type="checkbox" id="checkbox1" value="checkbox1" onClick="saveCheckboxStates()" />
      <span class="slider round"></span>
    </label>
</a>
<!-- END {product_title} -->
    """

    return html_template


# Main loop to generate HTML snippets for multiple products
if __name__ == "__main__":
    while True:
        # Generate HTML for one product
        html_output = generate_html()
        print("\nGenerated HTML:\n")
        print(html_output)

        # Ask if the user wants to add another product
        another = input("\nWould you like to enter another product? (yes/no): ")
        if another.lower() != 'yes':
            break
