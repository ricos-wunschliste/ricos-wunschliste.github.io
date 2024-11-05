def generate_html():
    product_link = input("Enter the product link: ")
    product_title = input("Enter the product title: ")
    subtitle = input("Enter the subtitle: ")
    image_link = input("Enter the image link: ")


    # HTML template
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
      <input type="checkbox" id="checkbox1" value="checkbox1" onClick="save()" />
      <span class="slider round"></span>
    </label>
</a>
<!-- END {product_title} -->
    """

    return html_template

if __name__ == "__main__":
    html_output = generate_html()
    print("\nGenerated HTML:\n")
    print(html_output)
